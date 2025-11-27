import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import { getProducts } from "../api/getProducts";
import type { ProductsResponse } from "../schemas";
import type { ProductFilters } from "../types";

const parseFiltersFromURL = (searchParams: URLSearchParams): ProductFilters => {
  const categoriesParam = searchParams.get("categories");
  const categories = categoriesParam
    ? categoriesParam
        .split(",")
        .map((cat) => cat.trim())
        .filter(Boolean)
    : [];
  const rating = searchParams.get("rating");

  return {
    categories: categories.length > 0 ? categories : undefined,
    rating: rating ? Number(rating) : undefined,
  };
};

export const useProductsQuery = () => {
  const [searchParams] = useSearchParams();
  const filters = parseFiltersFromURL(searchParams);
  const sortBy = searchParams.get("sort") || "recommended";

  return useSuspenseQuery<ProductsResponse>({
    queryKey: ["products", "all"],
    queryFn: getProducts,
    staleTime: 1000 * 60,

    select: (data) => {
      let filtered = data.products;

      if (filters?.categories && filters.categories.length > 0) {
        filtered = filtered.filter((p) =>
          filters.categories!.includes(p.category)
        );
      }

      if (filters?.rating) {
        filtered = filtered.filter((p) => p.rating >= filters.rating!);
      }

      const sorted =
        sortBy === "recommended"
          ? filtered // Keep original API order
          : [...filtered].sort((a, b) => {
              switch (sortBy) {
                case "price-asc":
                  return a.price - b.price;
                case "price-desc":
                  return b.price - a.price;
                default:
                  return 0;
              }
            });

      return {
        ...data,
        products: sorted,
        total: sorted.length,
      };
    },
  });
};
