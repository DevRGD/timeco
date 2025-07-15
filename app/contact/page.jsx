import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl space-y-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight">Customer Assistance</h1>
          <p className="text-muted-foreground text-lg">
            We're here to help. Whether you need product support, want to schedule a consultation, or have a question —
            our dedicated team is available worldwide.
          </p>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <p className="font-medium text-highlight-foreground">Email Support</p>
              <p>
                <a href="mailto:support@timeco.com" className="underline hover:text-accent">
                  support@timeco.com
                </a>
              </p>
            </div>

            <div>
              <p className="font-medium text-highlight-foreground">Call Center</p>
              <p>
                Mon–Fri, 9:00am – 6:00pm GMT
                <br />
                +1 (800) 123-4567
              </p>
            </div>

            <div>
              <p className="font-medium text-highlight-foreground">Boutique Services</p>
              <p>
                Visit our boutiques or{' '}
                <a href="/stores" className="underline hover:text-accent">
                  schedule an appointment
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Connect with TIMECO</h2>
          <p className="text-muted-foreground text-sm">
            Follow us for product updates, behind-the-scenes content, and more.
          </p>

          <div className="flex gap-5 text-muted-foreground">
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
    </main>
  );
}
