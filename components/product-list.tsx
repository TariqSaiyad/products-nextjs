import { getAllProducts } from "@/lib/product";
import ProductTeaser from "./product-teaser";

export default async function ProductsList() {
  const products = await getAllProducts();
  return (
    <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-6xl self-center">
      {products.map((product) => (
        <li key={product.id} className="h-full">
          <ProductTeaser {...product} />
        </li>
      ))}
    </ul>
  );
}
