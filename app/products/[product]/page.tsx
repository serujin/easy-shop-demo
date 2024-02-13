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
  description: string;
  name: string;
  quantityOptions: ProductQuantityOptionType[];
  rating: number;
  reviews: number;
  sizeOptions: ProductSizeOptionType[];
};

export default function ProductPage() {
  const [productData, setProductData] = useState({} as ProductInformation);

  const productId = usePathname().split("/").at(-1);

  const { description, name, quantityOptions, rating, reviews, sizeOptions } =
    productData;

  useEffect(() => {
    getProductInformationById(productId ? productId : "").then(
      (ProductInformation) => setProductData(ProductInformation)
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
