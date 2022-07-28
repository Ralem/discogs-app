import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("<Button />", () => {
  it("Renders the component", async () => {
    render(<Button data-testid="button">Button</Button>);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});
