import type { Metadata } from 'next';
import { CartProvider } from '@/context/CartContext';
import { Be_Vietnam_Pro } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/navbar';
import './globals.css';

const vietnami = Be_Vietnam_Pro({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Ultra Shop',
  description: 'Ecommerce application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${vietnami.className}  max-w-7xl m-auto w-full`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
