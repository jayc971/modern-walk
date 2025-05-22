import CategoryCard from "@/components/category-card"
import { Suspense } from "react"
import FlashSaleCarousel from "@/components/flash-sale-carousel"

export default function Home() {
  return (
    <main className="pb-16">
      <section className="mb-10">
        <h2 className="text-2xl font-bold my-10 text-primary-font">
          Flash Sale
        </h2>
        <Suspense fallback={<div className="text-center py-10 text-primary-font">Loading...</div>}>
          <FlashSaleCarousel />
        </Suspense>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-10 mt-14 text-primary-font">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CategoryCard title="Men's Clothing" bgColor="bg-mens-clothing" href="/mens-clothing" />
          <CategoryCard title="Women's Clothing" bgColor="bg-womens-clothing" href="/womens-clothing" />
        </div>
      </section>
    </main>
  )
}
