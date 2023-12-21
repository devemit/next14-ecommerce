'use server';

export async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok) throw new Error('Failed to fetch the products.');

  return res.json();
}
