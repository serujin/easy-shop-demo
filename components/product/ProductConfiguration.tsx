import React, { ChangeEvent, FormEvent, useState } from "react";
import ProductSizeOption, {
  ProductSizeOptionType,
} from "./configurationOptions/ProductSizeOption";
import ProductQuantityOption, {
  ProductQuantityOptionType,
} from "./configurationOptions/ProductQuantityOption";

type ProductConfigurationProps = {
  sizeOptions: Array<ProductSizeOptionType>;
  quantityOptions: Array<ProductQuantityOptionType>;
};

export default function ProductConfiguration(props: ProductConfigurationProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedQuantity, setSelectedQuantity] = useState<string>("");

  const { sizeOptions, quantityOptions } = props;

  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedQuantity(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div>
        <h4>Select a size</h4>
        <ul>
          {sizeOptions &&
            sizeOptions.map(({ value }, index) => (
              <ProductSizeOption
                handleSizeChange={handleSizeChange}
                key={index}
                optionNumber={index}
                selectedSize={selectedSize}
                value={value}
              />
            ))}
        </ul>
      </div>
      <div>
        <h4>Select a quantity</h4>
        <ul>
          {quantityOptions &&
            quantityOptions.map(({ discount, price, value }, index) => (
              <ProductQuantityOption
                discount={discount}
                handleQuantityChange={handleQuantityChange}
                key={index}
                optionNumber={index}
                price={price}
                selectedQuantity={selectedQuantity}
                value={value}
              />
            ))}
        </ul>
      </div>
      <button type="submit">Continue</button>
    </form>
  );
}
