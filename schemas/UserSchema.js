import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const SignupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
});

export const UserZ = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long.').trim(),
  email: z.string().email('Please enter a valid email.').trim(),
  role: z.enum(['user', 'admin']).optional(),
});
