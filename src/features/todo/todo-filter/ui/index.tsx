import { HTMLAttributes } from "react";

import { FILTER_ACTIONS } from "../lib";

import { FilterAction } from "./filter-action";

type TodoFilterProps = HTMLAttributes<HTMLDivElement>;

export function TodoFilter(props: TodoFilterProps) {
  return (
    <div className="flex items-center gap-4" {...props}>
      {FILTER_ACTIONS.map((action) => (
        <FilterAction key={action.value} {...action} />
      ))}
    </div>
  );
}
