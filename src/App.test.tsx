import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("click", async () => {
  const { getByRole } = render(<textarea />);

  await userEvent.type(getByRole("textbox"), "Hello, World!");
  expect(getByRole("textbox")).toHaveAttribute("value", "Hello, World!");
});
