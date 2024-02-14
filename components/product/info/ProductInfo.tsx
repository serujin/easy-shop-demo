import React from "react";
import Ratings from "../../ratings/Ratings";
import styles from "./ProductInfo.module.css";

type ProductInfoProps = {
  description: string;
  name: string;
  rating: number;
  reviews: number;
};

const buttonOnClickHandler = () => console.log("Ordering samples...");

export default function ProductInfo(props: ProductInfoProps) {
  const { description, name, rating, reviews } = props;
  return (
    <div className={styles.productInfoContainer}>
      <Ratings title={name} rating={rating} reviews={reviews} />
      <p className={styles.description}>{description}</p>
      <button
        className={styles.orderSamplesButton}
        onClick={buttonOnClickHandler}
      >
        Order samples
      </button>
    </div>
  );
}
