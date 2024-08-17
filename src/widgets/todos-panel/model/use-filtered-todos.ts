import { useTodosStore } from "~/entities/todo";
import { useTodoFilterStore } from "~/features/todo";

import { filterTodos } from "./filter";

export const useFilteredTodos = () => {
  const todos = useTodosStore((store) => store.todos);
  const filter = useTodoFilterStore((store) => store.filter);

  return filterTodos(todos, filter);
};
