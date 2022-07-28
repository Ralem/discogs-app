import { fireEvent, render, screen } from "@testing-library/react";

import Input from "./Input";

describe("<Input />", () => {
  it("Renders the component", async () => {
    render(<Input data-testid="Input"></Input>);
    expect(screen.getByTestId("Input")).toBeInTheDocument();
  });

  it("Handles onChange events", async () => {
    const onChangeMock = jest.fn();
    render(<Input data-testid="onChangeInput" onChange={onChangeMock} />);
    const input = screen.getByTestId("onChangeInput");
    fireEvent.change(input, { target: { value: "newValue" } });
    expect(onChangeMock).toHaveBeenCalled();
  });
});
