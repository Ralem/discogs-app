import { render, screen } from "@testing-library/react";

import RecordsLayout from "./RecordsLayout";

describe("<RecordsLayout />", () => {
  it("Renders the component", async () => {
    render(<RecordsLayout data-testid="RecordsLayout">RecordsLayout</RecordsLayout>);
    expect(screen.getByTestId("RecordsLayout")).toBeInTheDocument();
  });
});
