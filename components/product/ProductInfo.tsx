import React from "react";
import Ratings from "../ratings/Ratings";
import Button from "../basic/Button";

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
    <div>
      <Ratings title={name} rating={rating} reviews={reviews} />
      <p>{description}</p>
      <Button text={"Order samples"} onClick={buttonOnClickHandler} />
    </div>
  );
}
