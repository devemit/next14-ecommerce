import { fetchFew } from '@/actions/fetchFew';
import Product from './product';
export default async function Carousel() {
  const productsLimit = await fetchFew();

  return (
    <div className='flex mt-10 gap-5 '>
      {productsLimit.map((el: any) => {
        return (
          <div key={el.id} className='border-2 rounded-xl px-6 '>
            <Product price={el.price} image={el.image} id={el.id} />
          </div>
        );
      })}
    </div>
  );
}
