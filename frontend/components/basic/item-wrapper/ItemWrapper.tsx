import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import styles from './ItemWrapper.module.css'

type ItemWrapperProps = {
  href: string
  imgAlt: string
  imgSrc: string
  title: string
}

const IMAGE_WIDTH = 200
const IMAGE_HEIGHT = 170

export default function ItemWrapper(props: ItemWrapperProps) {
  const { href, imgAlt, imgSrc, title } = props
  return (
    <div className={styles.itemWrapperContainer}>
      <Link href={href}>
        <div className={styles.itemContainer}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={IMAGE_WIDTH || 200}
            height={IMAGE_HEIGHT || 170}
            style={{
              width: IMAGE_WIDTH || 200,
              height: IMAGE_HEIGHT || 170,
            }}
            priority
          />
          <p className={styles.itemTitle}>{title}</p>
        </div>
      </Link>
    </div>
  )
}
