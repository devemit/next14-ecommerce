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
      <div onClick={toggleNavbarMenu}>{nav ? <X /> : <Menu />}</div>
      <ul
        onClick={() => setNav(false)}
        className={
          nav
            ? 'fixed top-0 left-0 pt-24 ease-in-out duration-700 bg-slate-200 flex flex-col justify-center gap-4 px-10 z-[-1] w-full h-1/2 '
            : 'top-[-100%] left-0 pt-24 ease-in-out duration-700 flex flex-col justify-center gap-4 px-10 w-full h-1/2 fixed'
        }
      >
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
    </section>
  );
}
