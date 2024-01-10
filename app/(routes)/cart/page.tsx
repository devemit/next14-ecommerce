'use client';

import { Button } from '@/components/ui/button';
// context imports

import { useCart } from '@/context/CartContext';
import { ProductInCartProps } from '@/types/types';

// next/react imports

import Image from 'next/image';
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';

const ShoppingCart = () => {
  const { cartState, removeFromCart, getTotalPrice } = useCart();
  const { toast } = useToast();

  function removeAddedItem(productToRemove: ProductInCartProps) {
    removeFromCart(productToRemove.id);
  }

  return (
    <div className='px-6 md:px-10 lg:px-14 flex flex-col pt-8 mb-6 gap-10 items-center justify-center'>
      <h2 className='text-3xl font-bold'>Shopping Cart</h2>
      <p className='font-semibold'>Total Price: {getTotalPrice()}$</p>
      <hr className='bg-slate-600  w-full' />
      {cartState.items.length === 0 ? (
        <div className='text-slate-600'>Your cart is empty</div>
      ) : (
        <ul className='flex flex-col'>
          {cartState.items.map((product, index) => (
            <div
              key={index}
              className='space-y-6 mt-2  p-2 md:flex md:items-center md:justify-between gap-20'
            >
              <div className='space-y-4'>
                <li className='max-w-xs text-slate-600 text-md'>{product.title}</li>
                <li className='text-slate-900 font-bold'>{product.price}$</li>
              </div>
              <div className='space-y-12'>
                <Link href={`/products/${product.id}`}>
                  <Image src={product.image} width={100} height={100} alt='cart-image' />
                </Link>
                <Button
                  onClick={() => {
                    removeAddedItem(product);
                    toast({
                      title: 'Product removed from cart succesfully.',
                    });
                  }}
                  variant='destructive'
                  size='sm'
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
