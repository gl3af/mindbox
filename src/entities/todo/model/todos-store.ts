import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Todo } from "../lib";

type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  checkTodo: (id: number) => void;
  clearCompleted: () => void;
};

export const useTodosStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      addTodo: (todo) => set({ todos: [...get().todos, todo] }),
      checkTodo: (id) =>
        set({
          todos: get().todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }),
      clearCompleted: () =>
        set({
          todos: get().todos.filter((todo) => !todo.completed),
        }),
    }),
    {
      name: "todos-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
