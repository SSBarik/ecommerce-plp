import { useProductsQuery } from "../hooks/useProductsQuery";
import ProductGrid from "./ProductGrid";
import ProductToolbar from "./ProductToolbar";

const ProductsContainer = () => {
  const { data } = useProductsQuery();

  return (
    <div className="p-4">
      <ProductGrid products={data.products} />
    </div>
  );
};

export default ProductsContainer;
