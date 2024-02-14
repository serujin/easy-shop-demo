import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './ProductConfiguration.module.css'
import ProductSizeOption, {
  ProductSizeOptionType,
} from './config-option/size/ProductSizeOption'
import ProductQuantityOption, {
  ProductQuantityOptionType,
} from './config-option/quantity/ProductQuantityOption'

type ProductConfigurationProps = {
  sizeOptions: Array<ProductSizeOptionType>
  quantityOptions: Array<ProductQuantityOptionType>
}

export default function ProductConfiguration(props: ProductConfigurationProps) {
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedQuantity, setSelectedQuantity] = useState<string>('')

  const { sizeOptions, quantityOptions } = props
  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value)
  }

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedQuantity(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(`Ordering ${selectedQuantity} stickers of size ${selectedSize}`)
  }

  const renderSelectedSize =
    selectedSize === '' ? sizeOptions?.at(0)?.value ?? '' : selectedSize
  const renderSelectedQuantity =
    selectedQuantity === ''
      ? quantityOptions?.at(0)?.value ?? ''
      : selectedQuantity

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className={styles.sizeOptionsContainer}>
        <h4>Select a size</h4>
        <ul>
          {sizeOptions &&
            sizeOptions.map(({ value }, index) => (
              <ProductSizeOption
                handleSizeChange={handleSizeChange}
                key={index}
                optionNumber={index}
                selectedSize={renderSelectedSize}
                value={value}
              />
            ))}
          <ProductSizeOption
            handleSizeChange={handleSizeChange}
            optionNumber={sizeOptions ? sizeOptions.length : 1}
            selectedSize={renderSelectedSize}
            value={'Custom size'}
          />
        </ul>
      </div>
      <div className={styles.quantityOptionsContainer}>
        <h4>Select a quantity</h4>
        <table>
          <tbody>
            {quantityOptions &&
              quantityOptions.map(({ discount, price, value }, index) => (
                <ProductQuantityOption
                  discount={discount}
                  handleQuantityChange={handleQuantityChange}
                  key={index}
                  optionNumber={index}
                  price={price}
                  selectedQuantity={renderSelectedQuantity}
                  value={value}
                />
              ))}
            <ProductQuantityOption
              handleQuantityChange={handleQuantityChange}
              optionNumber={quantityOptions ? quantityOptions.length : 1}
              selectedQuantity={renderSelectedQuantity}
              value={'Custom quantity'}
            />
          </tbody>
        </table>
      </div>
      <div className={styles.submitButtonContainer}>
        <button type="submit">Continue</button>
        <p>Next: upload artwork →</p>
      </div>
    </form>
  )
}
