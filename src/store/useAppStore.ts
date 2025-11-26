import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type AppState = {
  selectedCategory: string;
  setCategory: (category: string) => void;
};

export const useAppStore = create<AppState>()(
  immer((set) => ({
    selectedCategory: "",
    setCategory: (category) =>
      set((state) => {
        state.selectedCategory = category;
      }),
  }))
);
