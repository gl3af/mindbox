import { useTodosStore } from "~/entities/todo";
import { TodoFilter } from "~/features/todo";
import { getDeclination } from "~/shared/utils";

import { filterTodos } from "../../model";

export function PanelFooter() {
  const todos = useTodosStore((store) => store.todos);
  const clearCompleted = useTodosStore((store) => store.clearCompleted);

  const left = filterTodos(todos, "active").length;
  const declination = getDeclination(left, ["item", "items"]);

  return (
    <div className="border-t p-4 flex items-center justify-between text-primary/70">
      <p>
        {left} {declination} left
      </p>
      <TodoFilter data-testid="filters" />
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}
