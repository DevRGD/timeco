'use client';
import { useState } from 'react';
import { signup } from '@/actions/auth';
import { SignupSchema } from '@/schemas/UserSchema';

export default function SignupPage() {
  const [error, setError] = useState('');

  async function action(formData) {
    setError('');

    const formValues = Object.fromEntries(formData);
    const parse = SignupSchema.safeParse(formValues);

    if (!parse.success) {
      setError(parse.error.errors[0]?.message || 'Invalid input');
      return;
    }

    try {
      await signup(null, formData);
      window.location.href = '/';
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground px-4 py-20">
      <form action={action} className="w-full max-w-md space-y-6 rounded-sm border border-border bg-muted p-8 shadow">
        <h2 className="text-2xl font-semibold text-center">Create Account</h2>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            className="w-full rounded-sm border border-border bg-input px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-sm border border-border bg-input px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-sm bg-accent py-2 font-semibold text-accent-foreground shadow hover:shadow-md focus:ring-2 focus:ring-ring"
        >
          Sign Up
        </button>

        <p className="text-center text-sm">
          Already have an account?
          <a href="/login" className="ml-1 hover:text-accent underline">
            Log in
          </a>
        </p>
      </form>
    </main>
  );
}
