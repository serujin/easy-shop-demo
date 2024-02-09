import React from "react";
import Text from "@/components/basic/Text/Text";
import HugeTitle from "@/components/basic/Text/HugeTitle";
import styles from "./Ratings.module.css";
import StarDisplay from "./StarDisplay";

type RatingsProps = {
  titleStyle?: "huge" | "normal";
  title: string;
  rating: number;
  reviews: number;
};

const getRenderComponent = (textStyle: string) =>
  textStyle === "huge" ? HugeTitle : Text;

const createRatingsText = (reviews: number) => `${reviews} reviews`;

export default function Ratings(props: RatingsProps) {
  const { title, titleStyle = "normal", rating, reviews } = props;
  const ratingsText = createRatingsText(reviews);
  const TextComponent = getRenderComponent(titleStyle);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <TextComponent text={title} />
      </div>
      <div className={styles.reviewsContainer}>
        <StarDisplay rating={rating} maxRating={5} />
        <Text text={ratingsText}></Text>
      </div>
    </div>
  );
}
