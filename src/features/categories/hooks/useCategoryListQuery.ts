import { useSuspenseQuery } from "@tanstack/react-query";
import { getCategoryList } from "../api/getCategoryList";
import type { CategoryList } from "../schemas";
import { QUERY_KEYS } from "@/constants/query-keys";

export const useCategoryListQuery = () => {
  return useSuspenseQuery<CategoryList>({
    queryKey: QUERY_KEYS.CATEGORIES.LIST,
    queryFn: getCategoryList,
  });
};
