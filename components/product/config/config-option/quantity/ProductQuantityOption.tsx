import React, { ChangeEvent } from 'react'
import styles from './ProductQuantityOption.module.css'

export type ProductQuantityOptionType = {
  discount?: number
  price?: Amount
  value: string
  isLast?: boolean
}

type ProductQuantityOptionProps = ProductQuantityOptionType & {
  handleQuantityChange: (event: ChangeEvent<HTMLInputElement>) => void
  optionNumber: number
  selectedQuantity: string
}

const getId = (optionNumber: number, value: string) => {
  const valueId = value.toLowerCase().replace(' ', '-')
  return `quantity-${valueId}-${optionNumber}`
}

const getDiscountLabel = (discount?: number) =>
  discount ? `Save ${discount}%` : ''

const getPriceLabel = (price?: Amount) =>
  price ? `${price.currency}${price.quantity}` : ''

const getValueTableCell = (isLast: boolean, id: string, value: string) =>
  isLast ? (
    <td colSpan={3}>
      <label htmlFor={id}>{value}</label>
    </td>
  ) : (
    <td>
      <label htmlFor={id}>{value}</label>
    </td>
  )

export default function ProductQuantityOption(
  props: ProductQuantityOptionProps,
) {
  const {
    discount,
    handleQuantityChange,
    optionNumber,
    price,
    selectedQuantity,
    value,
    isLast = false,
  } = props

  const id = getId(optionNumber, value)
  const discountLabel = getDiscountLabel(discount)
  const priceLabelText = getPriceLabel(price)
  const discountTableCellClassName = `${styles.rightAlign} ${styles.discount}`

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
      {getValueTableCell(isLast, id, value)}
      {price && (
        <td className={styles.rightAlign}>
          <label htmlFor={id}>{priceLabelText}</label>
        </td>
      )}
      {discount && (
        <td className={discountTableCellClassName}>
          <label htmlFor={id}>{discountLabel}</label>
        </td>
      )}
    </tr>
  )
}
