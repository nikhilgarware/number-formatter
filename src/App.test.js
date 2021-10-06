import { render, screen } from "@testing-library/react";
import App from "./App";
import NumberFormatter from "./number-fromatter/number-formatter";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("number formatter for comma", () => {
  const data = NumberFormatter(360000);
  expect(data).toBe("3,60,000");
});

test("number formatter for decimal", () => {
  const data = NumberFormatter(360000.6596, 1);
  expect(data).toBe("3,60,000.7");
});
