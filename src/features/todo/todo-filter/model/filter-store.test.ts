import { describe, expect, test } from "vitest";

import { useTodoFilterStore } from "./filter-store";

describe("Todo filter store actions", () => {
  test("Updates filter", () => {
    useTodoFilterStore.setState({ filter: "all" });
    expect(useTodoFilterStore.getState().filter).toEqual("all");

    useTodoFilterStore.getState().changeFilter("active");
    expect(useTodoFilterStore.getState().filter).toEqual("active");

    useTodoFilterStore.getState().changeFilter("completed");
    expect(useTodoFilterStore.getState().filter).toEqual("completed");

    useTodoFilterStore.getState().changeFilter("all");
    expect(useTodoFilterStore.getState().filter).toEqual("all");
  });
});
