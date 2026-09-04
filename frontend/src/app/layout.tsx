import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Parra Verla Canca M.P.A.C.S. Ltd. - Co-operative Banking Society',
  description: 'Multipurpose Primary Agriculture Co-operative Society Ltd. providing reliable banking, loans, deposits, and agricultural services in North Goa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-slate-900 font-body antialiased flex flex-col selection:bg-navy-100 selection:text-navy-900">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
