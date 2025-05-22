import ProductCard from "@/components/product-card"
import { fetchProducts } from "@/lib/api"

export default async function CategoryPage({
  params,
}: {
  params: { slug: string }
}) {
  const decodedSlug = decodeURIComponent(params.slug)
  const products = await fetchProducts()
  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === decodedSlug.toLowerCase()
  )

  const bgColor =
    decodedSlug.toLowerCase() === "men's clothing"
      ? "bg-emerald-400"
      : "bg-pink-500"

  return (
    <main className="pb-16">
      <div
        className={`${bgColor} rounded-xl p-16 mb-10 flex items-center justify-center`}
      >
        <h1 className="text-5xl font-bold text-white">{decodedSlug}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
