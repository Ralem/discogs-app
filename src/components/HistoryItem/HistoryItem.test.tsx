import { render, screen } from "@testing-library/react";

import HistoryItem from "./HistoryItem";

describe("<HistoryItem />", () => {
  it("Renders the component", async () => {
    render(<HistoryItem data-testid="HistoryItem">HistoryItem</HistoryItem>);
    expect(screen.getByTestId("HistoryItem")).toBeInTheDocument();
  });
});
