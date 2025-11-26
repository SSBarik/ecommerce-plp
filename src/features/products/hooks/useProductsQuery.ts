import { useSuspenseQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";
import type { ProductsResponse } from "../schemas";

export const useProductsQuery = () => {
  return useSuspenseQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60,
  });
};
