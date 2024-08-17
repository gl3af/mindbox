import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useTodosStore } from "~/entities/todo";
import { todoMocks } from "~/shared/test";
import { getDeclination } from "~/shared/utils";

import { PanelFooter } from "./";

const renderFooter = () => render(<PanelFooter />);

describe("TodosPanel Footer UI", () => {
  const { data, ACTIVE } = todoMocks;

  it("Renders correctly", () => {
    renderFooter();

    expect(screen.getByText(/left/i)).toBeInTheDocument();
    expect(screen.getByTestId("filters")).toBeInTheDocument();
    expect(screen.getByText(/Clear completed/i)).toBeInTheDocument();
  });

  it("Label shows correct number of items left", () => {
    renderFooter();

    act(() => useTodosStore.setState({ todos: data }));

    const label = screen.getByText(/left/i);
    const declination = getDeclination(ACTIVE, ["item", "items"]);

    expect(label).toHaveTextContent(`${ACTIVE} ${declination} left`);
  });
});
