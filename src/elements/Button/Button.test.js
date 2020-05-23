import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "./Button";
test("should not allowed click button if isDisabled is Present   \n tidak boleh di klik jika ada isDisable", () => {
  let { container } = render(<Button isDisable></Button>);
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading/spiner", () => {
  let { container, getByText } = render(<Button isLoading></Button>);

  expect(container.querySelector("span")).toBeInTheDocument();
});
test("should render <a/> tag", () => {
  let { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});
test("should render <Link/> co mponent", () => {
  let { container } = render(
    <Router>
      <Button href="" type="link" isExternal></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
