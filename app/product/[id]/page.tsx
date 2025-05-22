import { fetchProductById } from "@/lib/api"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface ProductPageProps {
  params: {
    id: string
  }
}
export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProductById(Number(params.id))
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <main className="pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-center">
          <div className="relative h-[400px] w-full">
            <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-6 text-justify">{product.description}</p>
          <div className="text-white text-center rounded-xl py-6 mb-6 flex justify-between items-center">
            <p className="text-4xl font-bold text-blue-600">Rs {product.price.toFixed(2)}</p>
            <Button className="flex items-center justify-center gap-2 p-6">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
