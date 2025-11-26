import type { ProductGridProps } from "../types";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid sm:grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
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
