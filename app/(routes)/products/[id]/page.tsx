interface ParamsProps {
  params: {
    id: string;
  };
}
import { fetchSingleProduct } from '@/actions/fetchSingleProduct';

export default async function SingleProduct({ params: { id } }: ParamsProps) {
  const product = await fetchSingleProduct(id);

  return <div>{product.title}</div>;
}
