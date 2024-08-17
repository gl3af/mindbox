import { TodoCard, useTodosStore } from "~/entities/todo";

import { useFilteredTodos } from "../../model";

export function PanelList() {
  const todos = useFilteredTodos();
  const checkTodo = useTodosStore((store) => store.checkTodo);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          {...todo}
          onCheck={checkTodo}
          data-test-id="todo-item"
        />
      ))}
    </ul>
  );
}
