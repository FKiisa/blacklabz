import { render } from "@testing-library/react";
import { Label } from "./Label";

describe("Label Component", () => {
  it("Displays children correctly", () => {
    const { getByText } = render(<Label>Test Label</Label>);
    expect(getByText("Test Label")).toBeInTheDocument();
  });
});
