'use client';
import Link from 'next/link';
import { Watch } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-background text-foreground">
      <Watch size={48} className="mb-4 text-accent" />
      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <p className="text-muted-foreground mb-6">The page you’re looking for doesn’t exist or has been moved.</p>
      <Link
        href="/"
        className="rounded-sm bg-accent text-accent-foreground px-6 py-2 font-semibold shadow hover:shadow-md"
      >
        Go to Homepage
      </Link>
    </main>
  );
}
