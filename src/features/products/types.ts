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
