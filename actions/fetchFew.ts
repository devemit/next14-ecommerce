'use server';

export async function fetchFew() {
  const res = await fetch('https://fakestoreapi.com/products?limit=3');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
