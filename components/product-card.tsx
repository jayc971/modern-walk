import type { Product } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const bgColor = product.category.toLowerCase() === "men's clothing" ? "bg-mens-clothing" : "bg-womens-clothing"

  return (
    <Link href={`/product/${product.id}`}>
      <div
        className="flex flex-col h-full bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:scale-[1.02]"
        style={{ boxShadow: "5px 5px 5px 0px #00000026" }}
      >
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-center min-h-[4em]">{product.title}</h3>
          <div className="relative h-[200px] w-full flex-shrink-0">
            <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-contain" />
          </div>
        </div>
        <div className={`${bgColor} p-6 text-center rounded-xl`}>
            <p className="text-2xl font-bold text-blue-600 mb-2">Rs {product.price.toFixed(2)}</p>
          <p className="text-black text-sm line-clamp-4">{product.description}</p>
        </div>
      </div>
    </Link>
  )
}
