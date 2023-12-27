export interface SingleProductProps {
  id: number;
  title: string;
  category: string;
  price: string;
  image?: any;
}
export interface ProductInCartProps {
  id: number;
  title: string;
  price: string;
  image?: any;
}
export interface CartState {
  items: ProductInCartProps[];
}
