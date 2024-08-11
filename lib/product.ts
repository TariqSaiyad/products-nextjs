import { Product } from "@/types";

export async function getAllProducts(limit = 30) {
  console.time("getAllProducts");
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}`,
    {
      next: { revalidate: 10 },
    }
  );
  const json = await response.json();
  console.timeEnd("getAllProducts");
  return json.products as Product[];
}

export async function getProduct(id: string) {
  console.time(`getProduct: ${id}`);
  const response = await fetch(`https://dummyjson.com/products/${id}`,{
    next:{revalidate:10}
  });
  console.timeEnd(`getProduct: ${id}`);
  return (await response.json()) as Product;
}
