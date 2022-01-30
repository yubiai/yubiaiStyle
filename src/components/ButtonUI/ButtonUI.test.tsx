import React from "react";
import { render } from "@testing-library/react";
import ButtonUI from ".";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<ButtonUI label="Hello world!" />);
  });
});
