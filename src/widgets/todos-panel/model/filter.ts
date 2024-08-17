import { Todo } from "~/entities/todo";
import { TodoFilterVariant } from "~/features/todo";

export const filterTodos = (todos: Todo[], filter: TodoFilterVariant) => {
  switch (filter) {
    case "all":
      return todos;
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
  }
};
