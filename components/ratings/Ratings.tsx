import React from "react";
import styles from "./Ratings.module.css";
import StarDisplay from "./star-display/StarDisplay";

type RatingsProps = {
  titleStyle?: "huge";
  title: string;
  rating: number;
  reviews: number;
};

const createRatingsText = (reviews: number) => {
  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
  });

  return `${numberFormatter.format(reviews)} reviews`;
};

export default function Ratings(props: RatingsProps) {
  const { title, titleStyle, rating, reviews } = props;

  const ratingsText = createRatingsText(reviews);
  const titleClassName = titleStyle === "huge" ? styles.huge : styles.normal;
  const reviewContainerClassName = `${styles.reviewsContainer} ${
    titleStyle === "huge" ? styles.huge : styles.normal
  }`;
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={titleClassName}>{title}</p>
      </div>
      <div className={reviewContainerClassName}>
        <StarDisplay rating={rating} />
        <p>{ratingsText}</p>
      </div>
    </div>
  );
}
