import './globals.css';
import { Toaster } from 'sonner';
import buildMetadata from '@/libs/seo';
import { getUser } from '@/actions/auth';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export const metadata = buildMetadata();

export default async function RootLayout({ children, auth }) {
  const user = await getUser();

  return (
    <html lang="en">
      <body className="antialiased">
        <Header user={user} />
        {children}
        {/* {auth} */}
        <Toaster richColors position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
