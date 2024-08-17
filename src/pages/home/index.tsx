import { TodosPanel } from "~/widgets/todos-panel";

export function HomePage() {
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-8 flex-grow">
        <h1 className="text-7xl font-extralight text-red-300">Todos</h1>
        <TodosPanel />
      </div>
    </main>
  );
}
