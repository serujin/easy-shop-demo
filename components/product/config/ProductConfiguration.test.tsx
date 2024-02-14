import React from "react";
import { render } from "@testing-library/react";
import ProductConfiguration from "./ProductConfiguration";
import { describe, expect, it } from "@jest/globals";
import { ProductQuantityOptionType } from "./config-option/quantity/ProductQuantityOption";
import { ProductSizeOptionType } from "./config-option/size/ProductSizeOption";

const mockAmount = { quantity: 0, currency: "$" };
const mockQuantityOptions: ProductQuantityOptionType[] = [
  { value: "value-0", price: mockAmount },
  { value: "value-1", discount: 20, price: mockAmount },
  { value: "value-2", discount: 30, price: mockAmount },
  { value: "value-3", discount: 40, price: mockAmount },
  { value: "value-4", discount: 50, price: mockAmount },
  { value: "value-5", isLast: true },
];
const mockSizeOptions: ProductSizeOptionType[] = [
  { value: "value-0" },
  { value: "value-1" },
  { value: "value-2" },
  { value: "value-3" },
  { value: "value-4" },
  { value: "value-5" },
];

describe("ProductConfiguration component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <ProductConfiguration
        quantityOptions={mockQuantityOptions}
        sizeOptions={mockSizeOptions}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
