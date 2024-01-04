interface ParamsProps {
  params: {
    id: string;
  };
}
import { fetchSingleProduct } from '@/actions/fetchSingleProduct';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default async function SingleProduct({ params: { id } }: ParamsProps) {
  const product = await fetchSingleProduct(id);

  return (
    <section className='px-6 md:px-10 lg:px-14  md:pt-24 space-y-4 flex flex-col md:flex-row md:justify-between w-full mx-auto'>
      {/*  description */}
      <div className='left '>
        <div className='font-bold text-2xl md:text-3xl lg:text-4xl max-w-sm md:max-w-md text-slate-900'>
          {product.title}
        </div>
        <div className='text-sm md:text-lg max-w-md md:max-w-lg text-slate-600 pt-4 md:pt-12'>
          {product.description}
        </div>
        {/*  buttons */}
        <div className='pt-6'>
          <Button asChild>
            <Link href='/products'>Shop now</Link>
          </Button>
        </div>
      </div>
      {/*  image */}
      <div className='right flex items-center justify-center'>
        <Image
          src={product.image}
          alt='product-image'
          width={250}
          height={175}
          className='object-contain'
        />
      </div>
      <div className='font-bold text-slate-900'>{product.price}$</div>
    </section>
  );
}
