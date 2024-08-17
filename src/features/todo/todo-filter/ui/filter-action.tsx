import { cn } from "~/shared/utils";

import { FilterAction as TFilterAction } from "../lib";
import { useTodoFilterStore } from "../model";

type FilterActionProps = TFilterAction;

export function FilterAction({ label, value }: FilterActionProps) {
  const { filter, changeFilter } = useTodoFilterStore();

  const active = filter === value;
  const onClick = () => changeFilter(value);

  return (
    <button
      className={cn(
        "px-2 py-1 border-2 border-transparent",
        active && "border-red-300"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
