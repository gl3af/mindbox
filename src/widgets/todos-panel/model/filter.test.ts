import { describe, expect, test } from "vitest";

import { todoMocks } from "~/shared/test";

import { filterTodos } from "./filter";

describe("Todo filter logic", () => {
  const { data, TOTAL, COMPLETED, ACTIVE, EMPTY } = todoMocks;

  test("Returns all todos when filter's value is 'all'", () => {
    expect(filterTodos(data, "all").length).toEqual(TOTAL);
  });

  test("Returns only active todos when filter's value is 'active'", () => {
    expect(filterTodos(data, "active").length).toEqual(ACTIVE);
  });

  test("Returns only completed todos when filter' value is 'completed'", () => {
    expect(filterTodos(data, "completed").length).toEqual(COMPLETED);
  });

  test("Do not affect empty list", () => {
    expect(filterTodos([], "all").length).toEqual(EMPTY);
    expect(filterTodos([], "completed").length).toEqual(EMPTY);
    expect(filterTodos([], "active").length).toEqual(EMPTY);
  });
});
