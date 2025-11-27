import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { STORAGE_KEYS } from "@/constants/config";

type AppState = {
  selectedCategory: string;
  setCategory: (category: string) => void;
  wishlist: number[];
  toggleWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
};

export const useAppStore = create<AppState>()(
  persist(
    immer((set, get) => ({
      selectedCategory: "",
      setCategory: (category) =>
        set((state) => {
          state.selectedCategory = category;
        }),
      wishlist: [],
      toggleWishlist: (productId) =>
        set((state) => {
          const index = state.wishlist.indexOf(productId);
          if (index > -1) {
            state.wishlist.splice(index, 1);
          } else {
            state.wishlist.push(productId);
          }
        }),
      isInWishlist: (productId) => {
        return get().wishlist.includes(productId);
      },
    })),
    {
      name: STORAGE_KEYS.APP_STORAGE,
      partialize: (state) => ({ wishlist: state.wishlist }),
    }
  )
);
