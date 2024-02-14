import React from "react";
import { render } from "@testing-library/react";
import ProductSizeOption from "./ProductSizeOption";
import { describe, expect, jest, it } from "@jest/globals";

describe("ProductSizeOption component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <ProductSizeOption
        handleSizeChange={jest.fn()}
        optionNumber={0}
        selectedSize="selectedSize"
        value="value"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
