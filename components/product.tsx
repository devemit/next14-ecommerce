import Image from 'next/image';
import Link from 'next/link';
import { SingleProductProps } from '@/types/types';

export default function Product({ title, category, price, image, id }: SingleProductProps) {
  return (
    <div className='cursor-pointer h-[80%]'>
      <Link href={`/products/${id}`}>
        <h1 className='text-slate-900 font-semibold max-w-xs truncate'>{title}</h1>
        <p className='text-slate-600 text-sm'>{category}</p>
        <br />
        <div>
          <br />
          <Image src={image} alt='product-image' width={125} height={75} />
        </div>
        <br />
        <span className='text-slate-900 font-bold'>{price}$</span>
        <br />
      </Link>
    </div>
  );
}
