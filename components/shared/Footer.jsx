'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background text-foreground px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl grid gap-10 sm:gap-8 text-sm sm:grid-cols-2 md:grid-cols-4 text-center sm:text-left">
        {/* Company */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="mb-3 font-semibold">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-accent">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-accent">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:text-accent">
                Press
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="mb-3 font-semibold">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-accent">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-accent">
                Shipping & Returns
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="mb-3 font-semibold">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="hover:text-accent">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-accent">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/warranty" className="hover:text-accent">
                Warranty
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter + Address + Socials */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="mb-3 font-semibold">Stay Updated</h3>

          {/* Newsletter */}
          <form className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-sm border border-border bg-input px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <button
              type="submit"
              className="rounded-sm bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold shadow focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Subscribe
            </button>
          </form>

          {/* Address */}
          <div className="mt-4 text-xs text-muted-foreground">TIMECO HQ, 27 Rue de Rhône, Geneva, Switzerland</div>

          {/* Social Icons */}
          <div className="mt-3 flex gap-4 text-muted-foreground">
            <a
              href="https://instagram.com/timeco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-accent transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/timeco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-accent transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com/timeco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-accent transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://youtube.com/timeco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-accent transition"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://linkedin.com/company/timeco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} TIMECO. All rights reserved.
      </div>
    </footer>
  );
}
