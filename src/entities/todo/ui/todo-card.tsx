import { HTMLAttributes } from "react";

import { Checkbox, Label } from "~/shared/ui";
import { cn } from "~/shared/utils";

import { Todo } from "../lib";

type TodoCardProps = Omit<HTMLAttributes<HTMLLIElement>, "id"> &
  Todo & {
    onCheck: (id: number) => void;
  };

export function TodoCard({
  completed,
  title,
  id,
  onCheck,
  ...props
}: TodoCardProps) {
  return (
    <li
      className="px-4 py-4 flex items-center gap-6 border-b last:border-b-0"
      {...props}
    >
      <Checkbox
        id={String(id)}
        checked={completed}
        onCheckedChange={() => onCheck(id)}
        className="h-8 w-8 rounded-full border-border"
      />
      <Label
        htmlFor={String(id)}
        className={cn(
          "text-2xl cursor-pointer font-normal",
          completed && "text-muted-foreground line-through"
        )}
      >
        {title}
      </Label>
    </li>
  );
}
