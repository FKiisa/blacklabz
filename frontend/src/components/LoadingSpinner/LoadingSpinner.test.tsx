import { render } from "@testing-library/react";
import { LoadingSpinner } from "./LoadingSpinner";

describe("LoadingSpinner Component", () => {
  it("Shows up correctly", () => {
    render(<LoadingSpinner isLoading />);
  });
  it("Does not render when isLoading is false", () => {
    const { container } = render(<LoadingSpinner isLoading={false} />);
    expect(container.firstChild).toBeNull();
  });
});
