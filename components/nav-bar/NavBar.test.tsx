import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";
import { describe, expect, it } from "@jest/globals";

describe("NavBar component", () => {
  it("should render correctly", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
