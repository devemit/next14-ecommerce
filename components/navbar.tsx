'use client';
// next imports
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { routes } from '@/utils/routes';
import Link from 'next/link';

// components
import Logo from './logo';
import MobileNav from './mobile-nav';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='flex  items-center w-full justify-between h-20 px-6 md:px-10 lg:px-14'>
      <Logo />
      <ul className='hidden md:flex gap-3 m-0 p-0'>
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
      <MobileNav />
    </nav>
  );
}
