import { describe, expect, test } from "vitest";

import { useTodosStore } from "./todos-store";

const item = {
  id: 1,
  title: "Foo",
  completed: false,
};

const completedItem = { ...item, completed: true };

describe("Todos store actions", () => {
  test("Adds todo to store", () => {
    useTodosStore.setState({ todos: [] });

    useTodosStore.getState().addTodo(item);
    expect(useTodosStore.getState().todos).toEqual([item]);
  });

  test("Checks right todo", () => {
    useTodosStore.setState({ todos: [item] });

    useTodosStore.getState().checkTodo(item.id);
    expect(useTodosStore.getState().todos).toEqual([completedItem]);
  });

  test("Clears completed todos", () => {
    useTodosStore.setState({ todos: [completedItem, completedItem, item] });

    useTodosStore.getState().clearCompleted();
    expect(useTodosStore.getState().todos).toEqual([item]);
  });
});
