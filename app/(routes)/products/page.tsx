'use client';

// next/react imports
import { useState, useEffect } from 'react';
import { ProductInCartProps } from '@/types/types';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';
import { useFormStatus } from 'react-dom';
// components
import { Button } from '@/components/ui/button';
import Product from '@/components/product';
import Spinner from '@/components/loading-spinner';

export default function Shop() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const { pending } = useFormStatus();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const handleAddToCart = (product: ProductInCartProps) => {
    addToCart(product);
  };

  if (loading) return <Spinner />;

  return (
    <div className='px-6 md:px-10 pt-6 lg:px-14'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid gap-10'>
        {data &&
          data.map((el, index) => (
            <div key={index} className='flex flex-col gap-y-6 p-5'>
              <Product
                id={el.id}
                title={el.title}
                category={el.category}
                price={el.price}
                image={el.image}
              />
              <Button
                disabled={pending}
                className='w-[80%]'
                onClick={() => {
                  handleAddToCart(el);
                  toast({
                    title: 'Product added to cart succesfully.',
                  });
                }}
                size='sm'
                variant='default'
              >
                Add to Cart
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
}
