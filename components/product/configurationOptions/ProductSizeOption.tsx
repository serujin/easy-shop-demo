import React, { ChangeEvent } from "react";
import styles from "./ProductSizeOption.module.css";

export type ProductSizeOptionType = {
  value: string;
};

type ProductSizeOptionProps = ProductSizeOptionType & {
  handleSizeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  optionNumber: number;
  selectedSize: string;
};

const createId = (optionNumber: number, value: string) => {
  const dimension = value
    .replace(/[^\w\s]/gi, "")
    .toLowerCase()
    .replace(" ", "-");
  return `size-${dimension}-${optionNumber}`;
};

export default function ProductSizeOption(props: ProductSizeOptionProps) {
  const { handleSizeChange, optionNumber, selectedSize, value } = props;
  const id = createId(optionNumber, value);
  return (
    <li className={styles.productSizeOptionContainer}>
      <input
        className={styles.productSizeOptionInput}
        type="radio"
        id={id}
        name="dimensions"
        value={value}
        checked={selectedSize === value}
        onChange={handleSizeChange}
      />
      <label className={styles.productSizeOptionLabel} htmlFor={id}>
        {value}
      </label>
    </li>
  );
}
