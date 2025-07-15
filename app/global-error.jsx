'use client';
import { Watch } from 'lucide-react';

export default function GlobalError({ error, reset }) {
  console.error('Global Error:', error);

  return (
    <html>
      <body className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <Watch size={48} className="mb-4 text-accent" />
        <h2 className="text-2xl font-bold mb-2">Critical Application Error</h2>
        <p className="text-muted-foreground mb-6">Something broke globally. Try reloading the page.</p>
        <button
          onClick={() => reset()}
          className="rounded-sm bg-accent text-accent-foreground px-6 py-2 font-semibold shadow hover:shadow-md"
        >
          Reload
        </button>
      </body>
    </html>
  );
}
