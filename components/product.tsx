import Image from 'next/image';
import Link from 'next/link';
import { SingleProductProps } from '@/types/types';

export default function Product({ title, category, price, image, id }: SingleProductProps) {
  return (
    <div className='flex flex-col justify-between gap-8 cursor-pointer items-center p-4'>
      <h1>{title}</h1>
      <p>{category}</p>
      <span>{price}</span>
      <div>
        <Link href={`/products/${id}`}>
          <Image src={image} alt='product-image' width={200} height={150} />
        </Link>
      </div>
    </div>
  );
}
