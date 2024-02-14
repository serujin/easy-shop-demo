import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./ItemWrapper.module.css";

type ItemWrapperProps = {
  href: string;
  imgAlt: string;
  imgSrc: string;
  title: string;
};

const IMAGE_SIZE = 200;

export default function ItemWrapper(props: ItemWrapperProps) {
  const { href, imgAlt, imgSrc, title } = props;
  return (
    <div className={styles.itemWrapperContainer}>
      <Link href={href}>
        <div className={styles.itemContainer}>
          <Image
            className={styles.itemImage}
            src={imgSrc}
            alt={imgAlt}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
          <p className={styles.itemTitle}>{title}</p>
        </div>
      </Link>
    </div>
  );
}
