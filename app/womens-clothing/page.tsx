import ProductGrid from "@/components/product-grid"
import { fetchProductsByCategory } from "@/lib/api"

export default async function WomensClothingPage() {
  const products = await fetchProductsByCategory("women's clothing")

  return (
    <main className="pb-16">
      <h2 className="text-2xl font-bold my-10">
        Women's Clothing
      </h2>
      <ProductGrid products={products} />
    </main>
  )
}
