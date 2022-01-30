import React from "react";
import { render } from "@testing-library/react";
import ButtonUI from ".";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<ButtonUI variant="contained" color="success" size="medium" label="Hello world!" />);
  });
});
