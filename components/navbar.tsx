'use client';
// next imports
import { usePathname } from 'next/navigation';
import { routes } from '@/utils/routes';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

// components
import Logo from './logo';
import MobileNav from './mobile-nav';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { cartState } = useCart();

  return (
    <nav className='flex items-center w-full justify-between h-20 px-6 md:px-10 lg:px-14'>
      <Logo />
      <ul className='hidden md:flex items-center gap-3 m-0 p-0'>
        {routes.map((route, index) => (
          <Link
            className={`${
              pathname === route.href && 'text-slate-800'
            } text-xs uppercase font-semibold text-slate-500`}
            key={index}
            href={route.href}
          >
            {route.title}
          </Link>
        ))}
      </ul>
      <div className='flex items-center gap-4'>
        <Link className='cursor-pointer ml-4 flex' href='/cart'>
          <ShoppingCart size={22} />
          {cartState.items.length > 0 && (
            <div className='relative bg-red-700 w-4 h-4  flex items-center justify-center rounded-full'>
              <span className='absolute text-xs text-white'>{cartState.items.length}</span>
            </div>
          )}
        </Link>
        <MobileNav />
      </div>
    </nav>
  );
}
