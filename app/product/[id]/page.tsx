import Header from "@/components/header";
import { getProduct } from "@/lib/product";
import Image from "next/image";

export const revalidate = 10;
// export const dynamic = 'force-static'

export async function generateStaticParams() {
  return [{ id: '1' }];
}

export default async function ProductPage({ params }: { params: any }) {
  const { title, description, images, thumbnail, price, brand } =
    await getProduct(params.id);
  return (
    <main className="flex min-h-screen flex-col px-24 py-8">
      <Header/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <Image
              src={thumbnail}
              alt={title}
              height={320}
              width={592}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-200 text-2xl md:text-3xl">
              {title}
            </h2>
            <p className="text-gray-300 text-sm">{brand}</p>

            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-indigo-500 mr-1 mt-1">$</span>
                  <span className="font-bold text-indigo-600 text-3xl">
                    {price}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-200">{description}</p>

            <div className="flex py-4 space-x-4 mt-20">
              <button
                type="button"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
