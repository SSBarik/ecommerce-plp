import type { Product } from "../schemas";
import type { ProductFilters } from "../types";

export const filterProducts = (
  products: Product[],
  filters: ProductFilters
): Product[] => {
  let filtered = products;

  if (filters?.categories && filters.categories.length > 0) {
    filtered = filtered.filter((p) =>
      filters.categories!.includes(p.category)
    );
  }

  if (filters?.rating) {
    filtered = filtered.filter((p) => p.rating >= filters.rating!);
  }

  return filtered;
};

export const sortProducts = (
  products: Product[],
  sortBy: string
): Product[] => {
  if (sortBy === "recommended") {
    return products; // Keep original API order
  }

  return [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });
};

