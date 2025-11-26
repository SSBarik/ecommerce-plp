import { useSuspenseQuery } from "@tanstack/react-query";
import { getCategoryList } from "../api/getCategoryList";
import type { CategoryList } from "../schemas";

export const useCategoryListQuery = () => {
  return useSuspenseQuery<CategoryList>({
    queryKey: ["category-list"],
    queryFn: getCategoryList,
    staleTime: 1000 * 60,
  });
};
