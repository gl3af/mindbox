import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HomePage } from "./";

describe("Home page UI", () => {
  it("Renders correctly", () => {
    render(<HomePage />);

    expect(screen.getByText(/todos/i)).toBeInTheDocument();
    expect(screen.getByTestId("todos-panel")).toBeInTheDocument();
  });
});
