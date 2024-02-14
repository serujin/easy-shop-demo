'use client'
import ItemWrapper from '@/components/basic/ItemWrapper'
import Ratings from '@/components/ratings/Ratings'
import { useEffect, useState } from 'react'
import { getAllProductsBasicInformation } from '@/lib/products'
import styles from './page.module.css'

const createProductHref = (id: string) => `/products/${id}`
const createProductImgSrc = (id: string) => `/products/${id}/icon.webp`

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProductsBasicInformation().then((products) => setProducts(products))
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.headerContainer}>
        <div className={styles.ratingsContainer}>
          <Ratings
            title={'Custom stickers'}
            titleStyle="huge"
            rating={4.8}
            reviews={155761}
          />
        </div>
      </div>
      <div className={styles.productsContainer}>
        <div className={styles.productsWrapper}>
          {products.map(({ id, name }, index) => (
            <ItemWrapper
              key={index}
              href={createProductHref(id)}
              imgAlt={name}
              imgSrc={createProductImgSrc(id)}
              title={name}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
