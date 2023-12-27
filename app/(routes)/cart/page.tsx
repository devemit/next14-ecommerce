'use client';
// context imports
import { useCart } from '@/context/CartContext';

// next/react imports
import Image from 'next/image';

const ShoppingCart = () => {
  const { cartState } = useCart();

  return (
    <div className='px-6 md:px-10 lg:px-14'>
      <h2>Shopping Cart</h2>
      {cartState.items.length === 0 ? (
        <div>U have nothing in your cart</div>
      ) : (
        <ul>
          {cartState.items.map((product, index) => (
            <div key={index}>
              <li>{product.title}</li>
              <li>{product.price}</li>
              <Image src={product.image} width={200} height={200} alt='cart-image' />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
