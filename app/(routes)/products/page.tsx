// react imports
import { fetchProducts } from '@/actions/fetchProducts';
import { ProductProps } from '@/types/types';
import { Suspense } from 'react';

// components
import Product from '@/components/product';
import Loading from '@/components/loading';

export default async function Shop() {
  const data: ProductProps[] = await fetchProducts();

  return (
    <div className='px-6 md:px-10 lg:px-14'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid gap-10'>
        {data &&
          data.map((el) => (
            <Suspense fallback={<Loading />}>
              <div key={el.id}>
                <Product
                  id={el.id}
                  title={el.title}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              </div>
            </Suspense>
          ))}
      </div>
    </div>
  );
}
