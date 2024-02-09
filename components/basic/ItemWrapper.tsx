import Image from "next/image";
import React from "react";
import Text from "./Text/Text";
import Link from "next/link";
import styles from "./ItemWrapper.module.css";

type ItemWrapperProps = {
  href: string;
  imgAlt: string;
  imgSrc: string;
  title: string;
};

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
            width={200}
            height={200}
          />
          <Text text={title} />
        </div>
      </Link>
    </div>
  );
}
