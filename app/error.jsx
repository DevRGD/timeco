'use client';
import { Watch } from 'lucide-react';

export default function Error({ error, reset }) {
  console.error(error);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-background text-foreground">
      <Watch size={48} className="mb-4 text-accent" />
      <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
      <p className="text-muted-foreground mb-6">An unexpected error occurred. Try refreshing the page.</p>
      <button
        onClick={() => reset()}
        className="rounded-sm bg-accent text-accent-foreground px-6 py-2 font-semibold shadow hover:shadow-md"
      >
        Reload Page
      </button>
    </main>
  );
}
