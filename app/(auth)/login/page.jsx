'use client';
import { useState } from 'react';
import { login } from '@/actions/auth';
import { LoginSchema } from '@/schemas/UserSchema';

export default function Page() {
  const [error, setError] = useState('');

  async function action(formData) {
    setError('');
    const parse = LoginSchema.safeParse(Object.fromEntries(formData));
    if (!parse.success) {
      setError('Please provide a valid email.');
      return;
    }
    try {
      await login(null, formData);
      window.location.href = '/';
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground px-4 py-20">
      <form action={action} className="w-full max-w-md space-y-6 rounded-sm border border-border bg-muted p-8 shadow">
        <h2 className="text-2xl font-semibold text-center">Login</h2>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="space-y-4">
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
          Log In
        </button>

        <p className="text-center text-sm">
          New to TIMECO?
          <a href="/signup" className="ml-1 hover:text-accent underline">
            Create an account
          </a>
        </p>
      </form>
    </main>
  );
}
