'use client';

// react imports
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

// types
import { ProductInCartProps } from '@/types/types';
import { CartState } from '@/types/types';

type CartAction =
  | { type: 'ADD_TO_CART'; payload: ProductInCartProps }
  | { type: 'REMOVE_FROM_CART'; payload: number };

interface CartContextType {
  cartState: CartState;
  addToCart: (product: ProductInCartProps) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
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
  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
