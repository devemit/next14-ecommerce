import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

export default function Carouselwrapper() {
  return (
    <div className='px-12 md:px-10 lg:px-14 pt-12 mb-8'>
      <Carousel>
        <Link href={'/products'}>
          <CarouselContent>
            <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
              <div className='relative w-full h-60'>
                <Image
                  src='https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='carousel'
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/2 lg:basis-1/3 '>
              <div className='relative w-full h-60'>
                <Image
                  src='https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='carousel'
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/2 lg:basis-1/3 '>
              <div className='relative w-full h-60'>
                <Image
                  src='https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='carousel'
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/2 lg:basis-1/3 '>
              <div className='relative w-full h-60'>
                <Image
                  src='https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='carousel'
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
              <div className='relative w-full h-60'>
                <Image
                  src='https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='carousel'
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/2 lg:basis-1/3 '>
              <div className='relative w-full h-60'>
                <Image
                  src='https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='carousel'
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
              <div className='relative w-full h-60'>
                <Image
                  src='https://images.unsplash.com/photo-1610415302795-588f56f012bb?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='carousel'
                  fill
                  className=''
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Link>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
