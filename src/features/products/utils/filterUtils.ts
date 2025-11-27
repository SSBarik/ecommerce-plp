import type { ProductFilters } from "../types";

export const parseCategoriesFromURL = (
  categoriesParam: string | null
): string[] => {
  if (!categoriesParam) return [];
  return categoriesParam
    .split(",")
    .map((cat) => cat.trim())
    .filter(Boolean);
};

export const parseFiltersFromURL = (
  searchParams: URLSearchParams
): ProductFilters => {
  const categories = parseCategoriesFromURL(searchParams.get("categories"));
  const rating = searchParams.get("rating");

  return {
    categories: categories.length > 0 ? categories : undefined,
    rating: rating ? Number(rating) : undefined,
  };
};
