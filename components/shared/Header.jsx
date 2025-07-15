'use client';
import Link from 'next/link';
import Menu from '../buttons/Menu';
import { Watch } from 'lucide-react';
import { logout } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function Header({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const navLinks = [
    { href: '/collections', label: 'Collections' },
    { href: '/collections/men', label: "Men's Watches" },
    { href: '/collections/women', label: "Women's Watches" },
    { href: '/collections/new', label: 'New Arrivals' },
    { href: '/collections/best-sellers', label: 'Best Sellers' },
    { href: '/collections/accessories', label: 'Accessories' },
  ];

  const handleLogout = () => {
    startTransition(async () => {
      await logout();
      router.refresh();
    });
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background text-foreground px-4 py-3 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <Watch className="w-5 h-5" />
          TIMECO
        </Link>

        <nav className="hidden gap-6 text-[13px] font-medium uppercase tracking-wide md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative transition hover:text-accent">
              <span className="hover-underline">{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {!user ? (
            <>
              <Link href="/login" className="text-sm font-medium hover:text-accent">
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-md bg-accent text-accent-foreground px-4 py-1.5 text-sm font-semibold shadow hover:shadow-md focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link href="/account" className="text-sm font-medium hover:text-accent">
                {user.name || 'Account'}
              </Link>
              <button
                onClick={handleLogout}
                disabled={isPending}
                className="rounded-md border border-border px-4 py-1.5 text-sm font-medium hover:bg-muted focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-60"
              >
                {isPending ? 'Logging out…' : 'Logout'}
              </button>
            </>
          )}
        </div>

        <Menu onClick={() => setIsOpen(!isOpen)} open={isOpen} className="md:hidden text-foreground" />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 z-40 w-full h-[calc(100vh-56px)] overflow-y-auto bg-background border-t border-border px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium uppercase tracking-wide hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-6 border-t border-border pt-4 flex flex-col gap-3">
            {!user ? (
              <>
                <Link href="/login" className="text-sm font-medium hover:text-accent" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="rounded-md bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold shadow focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/account"
                  className="text-sm font-medium hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {user.name || 'Account'}
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  disabled={isPending}
                  className="w-full text-left rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-60"
                >
                  {isPending ? 'Logging out…' : 'Logout'}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
