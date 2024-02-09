import React, { ChangeEvent } from "react";

export type ProductQuantityOptionType = {
  discount?: number;
  price?: Amount;
  value: string;
};

type ProductQuantityOptionProps = ProductQuantityOptionType & {
  handleQuantityChange: (event: ChangeEvent<HTMLInputElement>) => void;
  optionNumber: number;
  selectedQuantity: string;
};

const createId = (optionNumber: number, value: string) =>
  `quantity-${value}-${optionNumber}`;

const createLabel = (value: string, discount?: number, price?: Amount) => {
  const baseLabel = `${value}`;
  return discount && price
    ? `${baseLabel} ${price.quantity}${price.currency} Save ${discount}%`
    : baseLabel;
};

export default function ProductQuantityOption(
  props: ProductQuantityOptionProps
) {
  const {
    discount,
    handleQuantityChange,
    optionNumber,
    price,
    selectedQuantity,
    value,
  } = props;

  const id = createId(optionNumber, value);
  const label = createLabel(value, discount, price);

  return (
    <li>
      <input
        type="radio"
        id={id}
        name="quantities"
        value={value}
        checked={selectedQuantity === value}
        onChange={handleQuantityChange}
      />
      <label htmlFor={id}>{label}</label>
    </li>
  );
}
