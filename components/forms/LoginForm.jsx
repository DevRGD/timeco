import { signup } from '@/actions/auth';

export default function Signup() {
  return (
    <form
      action={signup}
      className="mx-auto mt-8 w-full max-w-md rounded-xl border border-border bg-background text-foreground p-8 shadow-lg"
    >
      <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight">Create your account</h2>

      <div className="space-y-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Your name"
            className="h-10 w-full rounded-md border border-border bg-input px-3 text-sm outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="h-10 w-full rounded-md border border-border bg-input px-3 text-sm outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="h-10 w-full rounded-md border border-border bg-input px-3 text-sm outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-md bg-accent text-accent-foreground py-2 text-base font-semibold tracking-wide shadow hover:shadow-md focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
      >
        Sign Up
      </button>
    </form>
  );
}
