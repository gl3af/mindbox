import { TodoFilterVariant } from "./types";

export type FilterAction = { label: string; value: TodoFilterVariant };

export const FILTER_ACTIONS: FilterAction[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];
