import { render, screen } from "@testing-library/react";

import NotFoundState from "./NotFoundState";

describe("<NotFoundState />", () => {
  it("Renders the component", async () => {
    render(<NotFoundState data-testid="NotFoundState"></NotFoundState>);
    expect(screen.getByTestId("NotFoundState")).toBeInTheDocument();
  });
});
