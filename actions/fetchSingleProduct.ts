export async function fetchSingleProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) throw new Error('Failed to fetch the product!');

  return res.json();
}
