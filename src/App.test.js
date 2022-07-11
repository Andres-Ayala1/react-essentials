import { render } from "@testing-library/react";

test("renders an h1", () => {
  const { getByText } = render(<App />);
});
