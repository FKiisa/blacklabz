import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("Shows up correctly", () => {
    render(<Button onClick={() => {}} />);
  });
  it("Shows loading spinner when isLoading is true", () => {
    const { getByRole } = render(
      <Button onClick={() => {}} isLoading={true} />
    );
    const button = getByRole("button");
    expect(button.querySelector("span")).toBeInTheDocument();
  });
  it("Shows children when isLoading is false", () => {
    const { getByText } = render(
      <Button onClick={() => {}} isLoading={false}>
        Click Me
      </Button>
    );
    expect(getByText("Click Me")).toBeInTheDocument();
  });
  it("Calls onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click Me</Button>
    );
    const button = getByRole("button");
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
