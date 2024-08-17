import { create } from "zustand";

import { TodoFilterVariant } from "../lib";

type FilterStore = {
  filter: TodoFilterVariant;
  changeFilter: (filter: TodoFilterVariant) => void;
};

export const useTodoFilterStore = create<FilterStore>((set) => ({
  filter: "all",
  changeFilter: (filter) => set({ filter }),
}));
