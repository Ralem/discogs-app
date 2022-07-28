import { render, screen } from "@testing-library/react";

import ErrorState from "./ErrorState";

describe("<ErrorState />", () => {
  it("Renders the component", async () => {
    render(<ErrorState data-testid="ErrorState">ErrorState</ErrorState>);
    expect(screen.getByTestId("ErrorState")).toBeInTheDocument();
  });
});
