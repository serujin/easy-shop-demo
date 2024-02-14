import Image from "next/image";
import React from "react";
import styles from "./StarDisplay.module.css";

interface StarDisplayProps {
  rating: number;
}

const MAX_RATING = 5;
const STAR_SIZE = 17;

type StarId = "full" | "half" | "empty";

const renderStar = (starId: StarId, index?: number): React.JSX.Element => {
  const imageUrl = `/ratings/${starId}-star.svg`;
  const camelCaseStarId = starId.slice(0, 1).toUpperCase() + starId.slice(1);
  const imageAlt = `${camelCaseStarId} star`;
  return index ? (
    <Image
      className={styles.starItem}
      key={index}
      src={imageUrl}
      alt={imageAlt}
      width={STAR_SIZE}
      height={STAR_SIZE}
    />
  ) : (
    <Image
      className={styles.starItem}
      src={imageUrl}
      alt={imageAlt}
      width={STAR_SIZE}
      height={STAR_SIZE}
    />
  );
};

const getStars = (rating: number) => {
  const fullStars = rating ? Math.floor(rating) : 0;
  const emptyStars = MAX_RATING - fullStars;
  const shouldShowHalfStar = rating - fullStars >= 0.5;
  return { emptyStars, fullStars, shouldShowHalfStar };
};

export default function StarDisplay(props: StarDisplayProps) {
  const { rating } = props;
  const { emptyStars, fullStars, shouldShowHalfStar } = getStars(rating);
  return (
    <div className={styles.starsContainer}>
      {[...Array(fullStars)].map((_, index) => renderStar("full", index))}
      {shouldShowHalfStar && renderStar("half")}
      {[...Array(emptyStars)].map((_, index) => renderStar("empty", index))}
    </div>
  );
}
