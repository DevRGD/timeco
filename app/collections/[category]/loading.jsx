'use client';
import { Watch } from 'lucide-react';

export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <Watch size={40} className="animate-spin mb-4 text-accent" />
      <p className="text-muted-foreground">Loading, please wait…</p>
    </main>
  );
}
