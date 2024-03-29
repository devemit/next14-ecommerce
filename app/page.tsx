import Carousel from '@/components/carousel';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='px-6 md:px-10 lg:px-14 flex flex-col pt-8 lg:pt-24 md:flex-row gap-12 md:gap-6 h-full'>
      <div className='flex-1 text-center md:text-left max-w-lg space-y-12'>
        <h3 className='text-xl font-semibold text-slate-700'>
          Where you sell your products matters
        </h3>
        <h1 className='text-4xl md:text-5xl font-semibold'>
          The center of <span className='text-green-500'>your helpful home.</span>
        </h1>
        <p className='text-base text-slate-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo distinctio
          illum neque deleniti provident asperiores, qui accusantium eos nam laborum, voluptatibus
          quaerat quam ut, magnam facere deserunt? Nam voluptate dolor excepturi ad quam harum.
          Recusandae mollitia laudantium odit assumenda.
        </p>
        <Button asChild size='sm'>
          <Link href='/products'>Explore more</Link>
        </Button>
      </div>
      <div className='flex-1 p-4'>
        <Image
          src='https://images.unsplash.com/photo-1580554430120-94cfcb3adf25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='home-background'
          width={650}
          height={550}
          className='rounded-xl'
        />
        <Carousel />
      </div>
    </div>
  );
}
