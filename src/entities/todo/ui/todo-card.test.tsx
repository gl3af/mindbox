import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { TodoCard } from "./todo-card";

describe("Todo card UI", () => {
  it("Renders correctly", () => {
    render(
      <TodoCard
        title="Foo"
        id={1}
        completed={false}
        onCheck={() => {
          return 0;
        }}
      />
    );

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText(/Foo/)).toBeInTheDocument();
  });

  it("Renders checked item correctly", () => {
    render(
      <TodoCard
        title="Foo"
        id={1}
        completed={true}
        onCheck={() => {
          return 0;
        }}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();

    const label = screen.getByText(/Foo/);
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("line-through");
  });

  it("Triggers onCheck callback on checkbox or label click", () => {
    const onCheck = vi.fn();

    render(<TodoCard title="Foo" id={1} completed={true} onCheck={onCheck} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(onCheck).toBeCalledTimes(1);

    const label = screen.getByText(/Foo/);
    fireEvent.click(label);
    expect(onCheck).toBeCalledTimes(2);
  });
});
