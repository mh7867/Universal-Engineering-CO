import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProductContent from '@/components/ProductContent'
import products from '@/public/data/products.json'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  return {
    title: product ? `${product.name} - Universal Engineering` : 'Product Not Found',
    description: product?.description || 'Product details',
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div>
        <Navigation />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold text-[#231F20] mb-4">Product Not Found</h1>
            <Link href="/#products" className="text-[#355FA8] hover:underline">
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProductContent product={product} />
      <Footer />
    </div>
  )
}
