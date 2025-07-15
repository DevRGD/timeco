'use server';
import db from '@/libs/db';
import jwt from 'jsonwebtoken';
import User from '@/models/User';
import { randomUUID } from 'crypto';
import { cookies } from 'next/headers';
import Session from '@/models/Session';
import { redirect } from 'next/navigation';
import { UserZ, LoginSchema } from '@/schemas/UserSchema';
import { sendEmail } from '@/utils/email';

const { JWT_SECRET, BASE_URL = 'http://localhost:3000' } = process.env;

const COOKIE_NAME = 'token';
const MAX_AGE = 60 * 60 * 24 * 7;
const MAGIC_EXPIRY = 60 * 10;

const signToken = (userId, expiresIn = MAX_AGE) => {
  const jti = randomUUID();
  const token = jwt.sign({ sub: userId, jti }, JWT_SECRET, { expiresIn });
  return { token, jti };
};

async function setAuthCookie(token) {
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    maxAge: MAX_AGE,
    path: '/',
  });
}

export async function signup(_, formData) {
  const parsed = UserZ.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });
  if (!parsed.success) throw parsed.error;

  const { name, email } = parsed.data;

  await db();
  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({ name, email });
  }

  const { token } = signToken(user._id, MAGIC_EXPIRY);
  const magicLink = `${BASE_URL}/auth/verify?token=${token}`;

  await sendEmail({
    to: email,
    slug: 'signup',
    data: {
      name,
      email,
      magic_link: magicLink,
    },
  });

  return { status: 'magic_link_sent' };
}

export async function login(_, formData) {
  const parsed = LoginSchema.safeParse({ email: formData.get('email') });
  if (!parsed.success) throw parsed.error;

  const { email } = parsed.data;

  await db();
  const user = await User.findOne({ email });
  if (!user) throw new Error('No account found for that email.');

  const { token } = signToken(user._id, MAGIC_EXPIRY);
  const magicLink = `${BASE_URL}/auth/verify?token=${token}`;

  await sendEmail({
    to: email,
    slug: 'login',
    data: {
      name: user.name,
      email,
      magic_link: magicLink,
    },
  });

  return { status: 'magic_link_sent' };
}

export async function verifyMagicLink(token) {
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch {
    throw new Error('Invalid or expired token');
  }

  await db();
  const user = await User.findById(payload.sub);
  if (!user) throw new Error('User not found');

  await Session.create({
    userId: user._id,
    jti: payload.jti,
    expiresAt: new Date(Date.now() + MAX_AGE * 1000),
  });

  const longToken = jwt.sign({ sub: user._id, jti: payload.jti }, JWT_SECRET, {
    expiresIn: MAX_AGE,
  });

  await setAuthCookie(longToken);
  redirect('/');
}

export async function logout() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return;

  try {
    const { jti } = jwt.verify(token, JWT_SECRET);
    await Session.deleteOne({ jti });
  } catch {}

  store.delete(COOKIE_NAME);
}

export async function getUser() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const valid = await Session.exists({ jti: payload.jti });
    if (!valid) return null;

    return User.findById(payload.sub).lean();
  } catch {
    return null;
  }
}
