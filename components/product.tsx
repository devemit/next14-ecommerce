import Image from 'next/image';
import Link from 'next/link';
import { ProductProps } from '@/types/types';

export default function Product({ title, category, price, image, id }: ProductProps) {
  return (
    <div className='flex flex-col justify-center text-left cursor-pointer items-center border-2 p-4'>
      <h1>{title}</h1>
      <p>{category}</p>
      <span>{price}</span>
      <div className=''>
        <Link href={`/products/${id}`}>
          <Image src={image} alt='product-image' width={200} height={150} />
        </Link>
      </div>
    </div>
  );
}
