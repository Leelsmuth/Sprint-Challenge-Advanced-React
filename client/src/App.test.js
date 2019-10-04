import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import App from "./App";

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<App />);
});

it("shows the word player", () => {
  const elementWithPlayer = tools.queryByText(/player/i);
  expect(elementWithPlayer).toBeInTheDocument();
});
