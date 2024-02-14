import React from "react";
import { render } from "@testing-library/react";
import StarDisplay from "./StarDisplay";
import { describe, expect, it } from "@jest/globals";

describe("StarDisplay component", () => {
  describe("when rendering a rating of 5", () => {
    it("should render correctly", () => {
      const { container } = render(<StarDisplay rating={5} />);

      expect(container).toMatchSnapshot();
    });
  });
  describe("when rendering a rating with .5 as decimal part", () => {
    it("should render correctly", () => {
      const { container } = render(<StarDisplay rating={3.5} />);

      expect(container).toMatchSnapshot();
    });
  });
  describe("when rendering a rating with .3 as decimal part", () => {
    it("should render correctly", () => {
      const { container } = render(<StarDisplay rating={2.3} />);

      expect(container).toMatchSnapshot();
    });
  });
  describe("when rendering a rating of 0", () => {
    it("should render correctly", () => {
      const { container } = render(<StarDisplay rating={0} />);

      expect(container).toMatchSnapshot();
    });
  });
});
