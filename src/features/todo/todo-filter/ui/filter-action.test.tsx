import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useTodoFilterStore } from "../model";

import { FilterAction } from "./filter-action";

describe("Filter action UI", () => {
  it("Renders correctly", () => {
    render(<FilterAction label="All" value="all" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("All");
  });

  it("Has border when active", () => {
    useTodoFilterStore.setState({ filter: "active" });
    render(<FilterAction label="Active" value="active" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("border-red-300");
  });

  it("Has no border when not active", () => {
    useTodoFilterStore.setState({ filter: "active" });
    render(<FilterAction label="All" value="all" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass("border-red-300");
  });

  it("Changes store value when clicked", () => {
    useTodoFilterStore.setState({ filter: "active" });

    const value = "all";
    render(<FilterAction label="All" value={value} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(useTodoFilterStore.getState().filter).toBe(value);
  });
});
