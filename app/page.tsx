import Header from "@/components/header";
import ProductsList from "@/components/product-list";

export const revalidate = 10


// This component is rendered on '/'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-24 py-8">
      <Header title="Products" />
      <ProductsList />
    </main>
  );
}
