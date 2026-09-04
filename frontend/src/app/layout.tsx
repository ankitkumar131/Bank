import './globals.css';
import { Noto_Serif, Inter, Public_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Parra Verla Canca Co-operative Society',
  description: 'Multipurpose Primary Agriculture Co-operative Society Ltd. providing comprehensive banking and agricultural services in North Goa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerif.variable} ${publicSans.variable}`}>
      <body className="min-h-screen bg-surface text-charcoal-900 font-body antialiased flex flex-col selection:bg-primary/10 selection:text-primary">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
