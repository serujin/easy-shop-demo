import React from 'react'
import Ratings from '../../ratings/Ratings'
import styles from './ProductInfo.module.css'

type ProductInfoProps = {
  description: string
  name: string
  rating: number
  reviews: number
  samplesAvailable: boolean
}

const buttonOnClickHandler = () => console.log('Ordering samples...')

const BUTTON_TEXT = 'Order samples'

export default function ProductInfo(props: ProductInfoProps) {
  const { description, name, rating, reviews, samplesAvailable } = props
  return (
    <div className={styles.productInfoContainer}>
      <Ratings title={name} rating={rating} reviews={reviews} />
      <p className={styles.description}>{description}</p>
      {samplesAvailable && (
        <button
          className={styles.orderSamplesButton}
          onClick={buttonOnClickHandler}
        >
          {BUTTON_TEXT}
        </button>
      )}
    </div>
  )
}
