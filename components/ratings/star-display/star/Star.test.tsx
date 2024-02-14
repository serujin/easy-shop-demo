import React from "react";
import { render } from "@testing-library/react";
import Star from "./Star";
import { describe, expect, it } from "@jest/globals";

describe("Star component", () => {
  describe("when rendering the full variant", () => {
    it("should render correctly", () => {
      const { container } = render(<Star variant="full" />);
      expect(container).toMatchSnapshot();
    });
  });
  describe("when rendering the half variant", () => {
    it("should render correctly", () => {
      const { container } = render(<Star variant="half" />);
      expect(container).toMatchSnapshot();
    });
  });
  describe("when rendering the empty variant", () => {
    it("should render correctly", () => {
      const { container } = render(<Star variant="empty" />);
      expect(container).toMatchSnapshot();
    });
  });
});
