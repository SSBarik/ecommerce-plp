import type { Product } from "../schemas";
import type { ProductFilters, SortOption } from "../types";
import { DEFAULT_SORT_OPTION, SORT_OPTIONS } from "../types";

export const filterProducts = (
  products: Product[],
  filters: ProductFilters
): Product[] => {
  let filtered = products;

  if (filters?.categories && filters.categories.length > 0) {
    filtered = filtered.filter((p) => filters.categories!.includes(p.category));
  }

  if (filters?.rating) {
    filtered = filtered.filter((p) => p.rating >= filters.rating!);
  }

  return filtered;
};

export const sortProducts = (
  products: Product[],
  sortBy: SortOption
): Product[] => {
  if (sortBy === DEFAULT_SORT_OPTION) {
    return products;
  }

  return [...products].sort((a, b) => {
    switch (sortBy) {
      case SORT_OPTIONS.PRICE_ASC:
        return a.price - b.price;
      case SORT_OPTIONS.PRICE_DESC:
        return b.price - a.price;
      default:
        return 0;
    }
  });
};
