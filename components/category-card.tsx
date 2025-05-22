import Link from "next/link"

interface CategoryCardProps {
  title: string
  bgColor: string
  href: string
}

export default function CategoryCard({ title, bgColor, href }: CategoryCardProps) {
  return (
    <Link href={href}>
      <div
        className={`${bgColor} rounded-xl p-24 flex items-center justify-center cursor-pointer transition-transform hover:scale-[1.02]`}
        style={{
          minHeight: "300px",
          boxShadow: "5px 5px 5px 0px #00000026"
        }}
      >
        <h2 className="text-5xl font-bold text-white">{title}</h2>
      </div>
    </Link>
  )
}
