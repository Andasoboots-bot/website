import { getProductBySlug, products } from "@/data/products";
import { ProductDetail } from "./ProductDetail";
import Link from "next/link";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-[#a41e21] hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-20">
      <ProductDetail product={product} />
    </div>
  );
}
