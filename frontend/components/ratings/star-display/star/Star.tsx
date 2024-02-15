import React from 'react'
import Image from 'next/image'
import styles from './Star.module.css'

const STAR_SIZE = 17

type StarProps = {
  variant: 'full' | 'half' | 'empty'
}

export default function Star(props: StarProps) {
  const { variant } = props
  const imageUrl = `/ratings/${variant}-star.svg`
  const camelCaseVariant = variant.slice(0, 1).toUpperCase() + variant.slice(1)
  const imageAlt = `${camelCaseVariant} star`
  return (
    <Image
      className={styles.starItem}
      src={imageUrl}
      alt={imageAlt}
      width={STAR_SIZE || 17}
      height={STAR_SIZE || 17}
      priority
    />
  )
}
