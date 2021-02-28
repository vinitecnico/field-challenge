import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./";

test("Should Header is function", () => {
  expect(typeof Header).toBe("function");
});

test("should render header", () => {
    const { container } = render(<Header />);

    expect(container.querySelector('img')).toBeTruthy()
    expect(container.querySelector('h1')).toHaveTextContent('City Bikes')
});
