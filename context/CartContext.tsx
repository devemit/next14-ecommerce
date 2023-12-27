'use client';
// react imports
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

// types
import { ProductInCartProps } from '@/types/types';
import { CartState } from '@/types/types';

type CartAction = { type: 'ADD_TO_CART'; payload: ProductInCartProps };

interface CartContextType {
  cartState: CartState;
  addToCart: (product: ProductInCartProps) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.payload] };
    // Add more cases as needed (e.g., REMOVE_FROM_CART)
    default:
      return state;
  }
};

// const STORAGE_KEY = 'cart';

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const storedCart = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || { items: [] };
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  // useEffect(() => {
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(cartState));
  // }, [cartState]);

  const addToCart = (product: ProductInCartProps) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return <CartContext.Provider value={{ cartState, addToCart }}>{children}</CartContext.Provider>;
};

const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
