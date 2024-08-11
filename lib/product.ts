import { Product } from "@/types";

export async function getAllProducts(limit = 30) {
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}`,
    {
      next: { revalidate: 10 },
    }
  );
  const json = await response.json();
  return json.products as Product[];
}

export async function getProduct(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 10 }
  });
  console.log(response);
  const data = await response.json();
  console.log(data);

  return data as Product;

}
