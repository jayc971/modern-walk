import type { Product } from "./types"

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products")

  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }

  return response.json()
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  const response = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch products for category: ${category}`)
  }

  return response.json()
}

export async function fetchProductById(id: number): Promise<Product | null> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)

    if (!response.ok) {
      return null
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}
