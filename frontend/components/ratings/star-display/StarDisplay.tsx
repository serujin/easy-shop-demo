import Image from 'next/image'
import React from 'react'
import styles from './StarDisplay.module.css'
import Star from './star/Star'

interface StarDisplayProps {
  rating: number
}

const MAX_RATING = 5

const getStars = (rating: number) => {
  const roundedRating = rating ? Math.round(rating * 2) / 2 : 0
  const fullStars = Math.floor(roundedRating)
  const shouldShowHalfStar = roundedRating - fullStars === 0.5
  const emptyStars =
    MAX_RATING - (shouldShowHalfStar ? fullStars + 1 : fullStars)
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
