import type { ProductGridProps } from "../types";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-x-0 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.thumbnail}
          price={product.price}
          brand={product.brand}
          discountPercentage={product.discountPercentage}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
