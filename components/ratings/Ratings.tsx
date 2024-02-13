import React from "react";
import styles from "./Ratings.module.css";
import StarDisplay from "./StarDisplay";

type RatingsProps = {
  titleStyle?: "huge" | "normal";
  title: string;
  rating: number;
  reviews: number;
};

const createRatingsText = (reviews: number) => `${reviews} reviews`;

export default function Ratings(props: RatingsProps) {
  const { title, titleStyle = "normal", rating, reviews } = props;
  const ratingsText = createRatingsText(reviews);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {titleStyle === "huge" ? <h1>{title}</h1> : <p>{title}</p>}
      </div>
      <div className={styles.reviewsContainer}>
        <StarDisplay rating={rating} maxRating={5} />
        <p>{ratingsText}</p>
      </div>
    </div>
  );
}
