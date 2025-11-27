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

export type ProductFilters = {
  categories?: string[];
  rating?: number;
};
