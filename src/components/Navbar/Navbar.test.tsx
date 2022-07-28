import { render, screen } from "@testing-library/react";

import Navbar from "./Navbar";

describe("<Navbar />", () => {
  it("Renders the component", async () => {
    render(<Navbar data-testid="Navbar">Navbar</Navbar>);
    expect(screen.getByTestId("Navbar")).toBeInTheDocument();
  });

  it("Uses a nav element", () => {
    render(<Navbar data-testid="navTest" />);
    const navbar = screen.getByTestId("navTest");
    expect(navbar.nodeName).toBe("NAV");
  });

  it("Renders it's children", () => {
    render(<Navbar data-testid="navbarChildren">Text</Navbar>);
    const navbar = screen.getByTestId("navbarChildren");
    expect(navbar.innerHTML).toBe("Text");
  });
});
