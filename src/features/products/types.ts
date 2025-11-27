import type { CategoryList } from "../categories/schemas";
import type { Product } from "./schemas";

export interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  discountPercentage: number;
  image: string;
  rating: number;
}

export interface ProductGridProps {
  products: Product[];
}
export interface FilterPanelProps {
  categories: CategoryList;
}
export interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface FilterContentProps {
  categories: string[];
  selectedCategories: string[];
  selectedRating: string | null;
  onCategoryChange: (category: string, checked: boolean) => void;
  onRatingChange: (value: string) => void;
}

export type ProductFilters = {
  categories?: string[];
  rating?: number;
};

export type SortOption = "recommended" | "price-asc" | "price-desc";

export const SORT_OPTIONS = {
  RECOMMENDED: "recommended",
  PRICE_ASC: "price-asc",
  PRICE_DESC: "price-desc",
} as const satisfies Record<string, SortOption>;

export const DEFAULT_SORT_OPTION: SortOption = SORT_OPTIONS.RECOMMENDED;

export type SortOptionConfig = {
  label: string;
  value: SortOption;
};
