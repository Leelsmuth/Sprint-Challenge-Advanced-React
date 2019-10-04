import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("shows a specific word", () => {
  const elementWithRose = tools.queryByText(/rose/i);
  expect(elementWithRose).toBeInTheDocument();
});
