import { render, screen } from "@testing-library/react";

import Icon from "./Icon";

describe("<Icon />", () => {
  it("Renders the component", async () => {
    render(<Icon data-testid="Icon">Icon</Icon>);
    expect(screen.getByTestId("Icon")).toBeInTheDocument();
  });
});
