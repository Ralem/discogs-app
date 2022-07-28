import { render, screen } from "@testing-library/react";

import RecordDisplay from "./RecordDisplay";

describe("<RecordDisplay />", () => {
  it("Renders the component", async () => {
    render(<RecordDisplay data-testid="RecordDisplay"></RecordDisplay>);
    expect(screen.getByTestId("RecordDisplay")).toBeInTheDocument();
  });
});
