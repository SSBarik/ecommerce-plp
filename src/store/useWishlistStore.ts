import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type WishlistState = {
  wishlist: number[];
  toggleWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    immer((set, get) => ({
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
      name: "wishlist-storage",
    }
  )
);
