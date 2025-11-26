import { useCategoryListQuery } from "@/features/categories/hooks/useCategoryListQuery";
import { useProductsQuery } from "../hooks/useProductsQuery";
import FilterPanel from "./FilterPanel";
import ProductGrid from "./ProductGrid";

const ProductsContainer = () => {
  const { data } = useProductsQuery();

  const { data: categoryList } = useCategoryListQuery();

  return (
    <div className="flex gap-8 p-4">
      <aside className="hidden lg:block w-64 shrink-0 mr-1">
        <FilterPanel categories={categoryList} />
      </aside>
      <main className="flex-1">
        <ProductGrid products={data.products} />
      </main>
    </div>
  );
};

export default ProductsContainer;
