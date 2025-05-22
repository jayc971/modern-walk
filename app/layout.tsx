import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Modern Walk | Fashion Retail",
  description: "Modern Walk fashion retail web app",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F5F5F5]`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <header className="py-6 border-b-4 border-[#D9D9D9]">
            <Link href="/">
              <h1 className="text-4xl font-bold text-center text-primary-font hover:text-gray-700 transition-colors">Modern Walk</h1>
            </Link>
          </header>
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
