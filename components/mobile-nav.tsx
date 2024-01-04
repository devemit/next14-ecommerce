'use client';

// react imports
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// components imports
import { routes } from '@/utils/routes';
import { Menu, X } from 'lucide-react';

export default function MobileNav() {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();

  function toggleNavbarMenu() {
    setNav(!nav);
  }

  return (
    <section className='md:hidden'>
      <div className='cursor-pointer' onClick={toggleNavbarMenu}>
        {nav ? <X /> : <Menu />}
      </div>
      <ul
        onClick={() => setNav(false)}
        className={
          nav
            ? 'fixed top-0 left-0 pt-28 ease-in-out duration-700 bg-slate-50 flex flex-col  gap-4 px-10  w-1/2 h-[100%] '
            : 'left-[-100%] top-0 pt-28 ease-in-out duration-700 flex flex-col gap-4 px-10 w-1/2 h-[100%] fixed'
        }
      >
        {routes.map((route, index) => (
          <Link
            className={`${
              pathname === route.href && 'text-slate-900'
            } text-base uppercase font-semibold border-b-2 text-slate-600`}
            key={index}
            href={route.href}
          >
            {route.title}
          </Link>
        ))}
      </ul>
    </section>
  );
}
