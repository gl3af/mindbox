import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, Mock, vi } from "vitest";

import { CreateTodoForm } from "./";

const renderForm = (onSubmit: Mock) => {
  render(<CreateTodoForm onSubmit={onSubmit} />);
};

describe("Create todo form", () => {
  it("Renders correctly", () => {
    const onSubmit = vi.fn();
    renderForm(onSubmit);

    expect(screen.getByTestId("form")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Validates empty value", async () => {
    const onSubmit = vi.fn();
    renderForm(onSubmit);

    const form = screen.getByTestId("form");
    const input = screen.getByRole("textbox");

    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.submit(form);

    expect(onSubmit).not.toBeCalled();
    await waitFor(() => {
      const errorMessage = screen.getByTestId("error-message");

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent("Minimum length is 5 symbols");
    });
  });

  it("Validates values with spaces", async () => {
    const onSubmit = vi.fn();
    renderForm(onSubmit);

    const form = screen.getByTestId("form");
    const input = screen.getByRole("textbox");

    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "          " } });
    fireEvent.submit(form);

    expect(onSubmit).not.toBeCalled();
    await waitFor(() => {
      const errorMessage = screen.getByTestId("error-message");

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent("Minimum length is 5 symbols");
    });
  });

  it("Validates values with length less than 5", async () => {
    const onSubmit = vi.fn();
    renderForm(onSubmit);

    const form = screen.getByTestId("form");
    const input = screen.getByRole("textbox");

    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.submit(form);

    expect(onSubmit).not.toBeCalled();
    await waitFor(() => {
      const errorMessage = screen.getByTestId("error-message");

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent("Minimum length is 5 symbols");
    });
  });

  it("Passes values with length equal to or more than 5", async () => {
    const onSubmit = vi.fn();
    render(<CreateTodoForm onSubmit={onSubmit} />);

    const form = screen.getByTestId("form");
    const input = screen.getByRole("textbox");

    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "fooba" } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(input).toHaveValue("");
      expect(onSubmit).toBeCalled();
    });
  });
});
