"use client";
import ProductInfo from "@/components/product/ProductInfo";
import { usePathname } from "next/navigation";
import ProductConfiguration from "@/components/product/ProductConfiguration";
import { ProductSizeOptionType } from "@/components/product/configurationOptions/ProductSizeOption";
import { ProductQuantityOptionType } from "@/components/product/configurationOptions/ProductQuantityOption";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getProductInformationById } from "@/lib/products";

type ProductInformation = {
  id: string;
  description: string;
  name: string;
  quantityOptions: Array<ProductQuantityOptionType>;
  rating: number;
  reviews: number;
  sizeOptions: Array<ProductSizeOptionType>;
};

export default function ProductPage() {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [sizeOptions, setSizeOptions] = useState([]);

  const productId = usePathname().split("/").at(-1);

  useEffect(() => {
    getProductInformationById(productId ? productId : "").then(
      ({
        description,
        name,
        quantityOptions,
        rating,
        reviews,
        sizeOptions,
      }) => {
        setDescription(description);
        setName(name);
        setQuantityOptions(quantityOptions);
        setRating(rating);
        setReviews(reviews);
        setSizeOptions(sizeOptions);
      }
    );
  }, [productId]);

  return (
    <main className={styles.main}>
      <ProductInfo
        description={description}
        name={name}
        rating={rating}
        reviews={reviews}
      />
      <ProductConfiguration
        quantityOptions={quantityOptions}
        sizeOptions={sizeOptions}
      />
    </main>
  );
}
