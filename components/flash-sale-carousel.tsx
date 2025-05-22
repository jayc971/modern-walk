"use client"
import { useEffect, useState } from "react"
import ProductCard from "./product-card"
import type { Product } from "@/lib/types"

export default function FlashSaleCarousel() {
  const [products, setProducts] = useState<Product[]>([])
  const currentIndex = 0;
  const [isLoading, setIsLoading] = useState(true)

  const itemsPerPage = 4

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        if (!response.ok) throw new Error()
        const data = await response.json()
        const mensProducts = data.filter((product: Product) => product.category.toLowerCase() === "men's clothing")
        const womensProducts = data.filter((product: Product) => product.category.toLowerCase() === "women's clothing")
        const arrangedProducts: Product[] = []
        const maxPairs = Math.min(mensProducts.length, womensProducts.length)
        for (let i = 0; i < maxPairs; i++) {
          arrangedProducts.push(mensProducts[i])
          arrangedProducts.push(womensProducts[i])
        }
        if (arrangedProducts.length < 8) {
          if (mensProducts.length > maxPairs) {
            for (let i = maxPairs; i < mensProducts.length && arrangedProducts.length < 8; i++) {
              arrangedProducts.push(mensProducts[i])
              if (arrangedProducts.length < 8 && womensProducts[i % womensProducts.length]) {
                arrangedProducts.push(womensProducts[i % womensProducts.length])
              }
            }
          } else if (womensProducts.length > maxPairs) {
            for (let i = maxPairs; i < womensProducts.length && arrangedProducts.length < 8; i++) {
              if (arrangedProducts.length % 2 === 0 && mensProducts[i % mensProducts.length]) {
                arrangedProducts.push(mensProducts[i % mensProducts.length])
              }
              if (arrangedProducts.length < 8) {
                arrangedProducts.push(womensProducts[i])
              }
            }
          }
        }
        setProducts(arrangedProducts.slice(0, 8))
      } catch (error) {
      } finally {
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>
  }

  const visibleProducts = products.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

  return (
    <div className="relative">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(0%)` }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
