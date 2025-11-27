import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import { getProducts } from "../api/getProducts";
import type { ProductsResponse } from "../schemas";
import type { SortOption } from "../types";
import { DEFAULT_SORT_OPTION, SORT_OPTIONS } from "../types";
import { QUERY_KEYS } from "@/constants/query-keys";
import { parseFiltersFromURL } from "../utils/filterUtils";
import { filterProducts, sortProducts } from "../utils/productUtils";

export const useProductsQuery = () => {
  const [searchParams] = useSearchParams();
  const filters = parseFiltersFromURL(searchParams);
  const sortParam = searchParams.get("sort");
  const sortBy: SortOption =
    sortParam === SORT_OPTIONS.PRICE_ASC ||
    sortParam === SORT_OPTIONS.PRICE_DESC
      ? sortParam
      : DEFAULT_SORT_OPTION;

  return useSuspenseQuery<ProductsResponse>({
    queryKey: QUERY_KEYS.PRODUCTS.ALL,
    queryFn: getProducts,

    select: (data) => {
      const filtered = filterProducts(data.products, filters);
      const sorted = sortProducts(filtered, sortBy);

      return {
        ...data,
        products: sorted,
        total: sorted.length,
      };
    },
  });
};
