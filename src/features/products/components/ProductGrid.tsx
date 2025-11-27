import { memo } from "react";
import type { ProductGridProps } from "../types";
import ProductCard from "./ProductCard";

const ProductGridComponent = ({ products }: ProductGridProps) => {
  return (
    <ul className="grid grid-cols-2 gap-x-0 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 list-none">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.thumbnail}
            price={product.price}
            brand={product.brand}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
          />
        </li>
      ))}
    </ul>
  );
};

const ProductGrid = memo(ProductGridComponent);

export default ProductGrid;
