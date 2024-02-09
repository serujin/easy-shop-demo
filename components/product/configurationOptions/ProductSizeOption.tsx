import React, { ChangeEvent } from "react";

export type ProductSizeOptionType = {
  value: string;
};

type ProductSizeOptionProps = ProductSizeOptionType & {
  handleSizeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  optionNumber: number;
  selectedSize: string;
};

const createId = (optionNumber: number, value: string) => {
  const dimension = value.replace(/[^\dx]/gi, "").toLowerCase();
  return `size-${dimension}-${optionNumber}`;
};

export default function ProductSizeOption(props: ProductSizeOptionProps) {
  const { handleSizeChange, optionNumber, selectedSize, value } = props;
  const id = createId(optionNumber, value);
  return (
    <li>
      <input
        type="radio"
        id={id}
        name="dimensions"
        value={value}
        checked={selectedSize === value}
        onChange={handleSizeChange}
      />
      <label htmlFor={id}>{value}</label>
    </li>
  );
}
