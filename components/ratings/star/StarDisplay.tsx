import Image from "next/image";
import React from "react";
import styles from "./StarDisplay.module.css";

interface StarDisplayProps {
  maxRating: number;
  rating: number;
}

// TODO: display empty stars based on maxRating
const getStars = (maxRating: number, rating: number) => {
  const fullStars = rating ? Math.floor(rating) : 0;
  const shouldShowHalfStar = rating - fullStars >= 0.5;
  return { fullStars, shouldShowHalfStar };
};

export default function StarDisplay(props: StarDisplayProps) {
  const { maxRating, rating } = props;
  const { fullStars, shouldShowHalfStar } = getStars(maxRating, rating);
  return (
    <div className={styles.starsContainer}>
      {[...Array(fullStars)].map((_, index) => (
        <Image
          className={styles.starItem}
          key={index}
          src={"/ratings/full-star.svg"}
          alt={"Full star"}
          width={17}
          height={17}
        />
      ))}
      {shouldShowHalfStar && (
        <Image
          className={styles.starItem}
          src={"/ratings/half-star.svg"}
          alt={"Half star"}
          width={17}
          height={17}
        />
      )}
    </div>
  );
}
