import { ChevronDown } from "lucide-react";

import { useTodosStore } from "~/entities/todo";
import type { CreateTodoDto } from "~/features/todo";
import { CreateTodoForm } from "~/features/todo";

export function PanelHeader() {
  const addTodo = useTodosStore((store) => store.addTodo);

  const onSubmit = ({ title }: CreateTodoDto) => {
    addTodo({ id: Date.now(), title, completed: false });
  };

  return (
    <div className="px-4 py-4 flex items-center gap-4 md:gap-6 w-full border-b">
      <div className="flex items-center justify-center px-1">
        <ChevronDown className="text-border h-6 w-6" strokeWidth={3} />
      </div>
      <CreateTodoForm onSubmit={onSubmit} />
    </div>
  );
}
