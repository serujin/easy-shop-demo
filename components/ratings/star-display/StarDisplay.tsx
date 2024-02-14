import Image from 'next/image'
import React from 'react'
import styles from './StarDisplay.module.css'
import Star from './star/Star'

interface StarDisplayProps {
  rating: number
}

const MAX_RATING = 5

const getStars = (rating: number) => {
  const fullStars = rating ? Math.floor(rating) : 0
  const emptyStars = MAX_RATING - fullStars
  const shouldShowHalfStar = rating - fullStars >= 0.5
  return { emptyStars, fullStars, shouldShowHalfStar }
}

export default function StarDisplay(props: StarDisplayProps) {
  const { rating } = props
  const { emptyStars, fullStars, shouldShowHalfStar } = getStars(rating)
  return (
    <div className={styles.starsContainer}>
      {[...Array(fullStars)].map((_, index) => (
        <Star variant="full" key={index} />
      ))}
      {shouldShowHalfStar && <Star variant="half" />}
      {[...Array(emptyStars)].map((_, index) => (
        <Star variant="empty" key={index} />
      ))}
    </div>
  )
}
