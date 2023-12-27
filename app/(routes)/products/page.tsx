'use client';
import { useState, useEffect } from 'react';
import Product from '@/components/product';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ProductInCartProps } from '@/types/types';
import { useToast } from '@/components/ui/use-toast';
export default function Shop() {
  const [data, setData] = useState<any[]>([]);
  const { addToCart } = useCart();
  const { toast } = useToast();
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const handleAddToCart = (product: ProductInCartProps) => {
    addToCart(product);
  };
  return (
    <div className='px-6 md:px-10 lg:px-14'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid gap-10'>
        {data &&
          data.map((el, index) => (
            <div key={index} className='border-2'>
              <Product
                id={el.id}
                title={el.title}
                category={el.category}
                price={el.price}
                image={el.image}
              />
              <Button
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
