import { render, screen } from "@testing-library/react";

import LoadingState from "./LoadingState";

describe("<LoadingState />", () => {
  it("Renders the component", async () => {
    render(<LoadingState data-testid="LoadingState">LoadingState</LoadingState>);
    expect(screen.getByTestId("LoadingState")).toBeInTheDocument();
  });
});
