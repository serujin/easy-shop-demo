import React, { ChangeEvent } from "react";
import styles from "./ProductQuantityOption.module.css";

export type ProductQuantityOptionType = {
  discount?: number;
  price?: Amount;
  value: string;
  isLast?: boolean;
};

type ProductQuantityOptionProps = ProductQuantityOptionType & {
  handleQuantityChange: (event: ChangeEvent<HTMLInputElement>) => void;
  optionNumber: number;
  selectedQuantity: string;
};

const createId = (optionNumber: number, value: string) =>
  `quantity-${value}-${optionNumber}`;

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
    isLast = false,
  } = props;

  const id = createId(optionNumber, value);
  const discountLabel = discount ? `Save ${discount}%` : "";
  const priceLabelText = price ? `${price.quantity}${price.currency}` : "";

  return (
    <tr className={styles.quantityRow}>
      <td className={styles.inputCell}>
        <input
          type="radio"
          id={id}
          name="quantities"
          value={value}
          checked={selectedQuantity === value}
          onChange={handleQuantityChange}
        />
      </td>
      {isLast && (
        <td colSpan={3}>
          <label htmlFor={id}>{value}</label>
        </td>
      )}
      {!isLast && (
        <td>
          <label htmlFor={id}>{value}</label>
        </td>
      )}
      {price && (
        <td className={styles.rightAlign}>
          <label htmlFor={id}>{priceLabelText}</label>
        </td>
      )}
      {discount && (
        <td className={styles.rightAlign}>
          <p>{discountLabel}</p>
        </td>
      )}
    </tr>
  );
}
