import { GeistSans } from 'geist/font/sans';
import './globals.css';
import NavHeader from '@/components/NavHeader';
import Footer from '@/components/Footer';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Registre-se para as melhores vagas de emprego!',
  description: 'Codex',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <NavHeader />
        <main className="flex min-h-screen flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
