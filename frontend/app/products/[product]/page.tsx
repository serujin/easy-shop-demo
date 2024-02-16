'use client'
import { usePathname } from 'next/navigation'
import ProductConfiguration from '@/components/product/config/ProductConfiguration'
import styles from '@/styles/product-page.module.css'
import { useEffect, useState } from 'react'
import { getProductInformationById } from '@/lib/products'
import { ProductQuantityOptionType } from '@/components/product/config/config-option/quantity/ProductQuantityOption'
import { ProductSizeOptionType } from '@/components/product/config/config-option/size/ProductSizeOption'
import ProductInfo from '@/components/product/info/ProductInfo'
import NotFound from '@/components/basic/not-found/NotFound'

type ProductInformation = {
  description: string
  name: string
  quantityOptions: ProductQuantityOptionType[]
  rating: number
  reviews: number
  samplesAvailable: boolean
  sizeOptions: ProductSizeOptionType[]
}

export default function Product() {
  const [productData, setProductData] = useState({} as ProductInformation)

  const productId = usePathname()?.split('/').at(-1) ?? ''

  useEffect(() => {
    getProductInformationById(productId ? productId : '').then(
      (ProductInformation) => setProductData(ProductInformation),
    )
  }, [productId])

  if (!productData) {
    return <NotFound />
  }

  const {
    description,
    name,
    quantityOptions,
    rating,
    reviews,
    samplesAvailable,
    sizeOptions,
  } = productData

  return (
    <main
      className={styles.main}
      style={{
        backgroundImage: `url(/products/${productId}/background.webp)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className={styles.mainContainer}>
        <div className={styles.productInfoContainer}>
          <ProductInfo
            description={description}
            name={name}
            rating={rating}
            reviews={reviews}
            samplesAvailable={samplesAvailable}
          />
        </div>
        <div className={styles.productConfigContainer}>
          <ProductConfiguration
            quantityOptions={quantityOptions}
            sizeOptions={sizeOptions}
          />
        </div>
      </div>
    </main>
  )
}
