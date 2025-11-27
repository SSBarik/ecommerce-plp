import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Fallback from "@/components/fallbacks/Fallback";
import FilterPanelSkeleton from "@/components/skeletons/FilterPanelSkeleton";
import ProductsSkeleton from "@/components/skeletons/ProductsSkeleton";
import ProductsContainer from "@/features/products/components/ProductsContainer";
import FilterPanel from "@/features/products/components/FilterPanel";
import FilterFAB from "@/features/products/components/FilterFAB";
import { useCategoryListQuery } from "@/features/categories/hooks/useCategoryListQuery";
import ProductToolbar from "@/features/products/components/ProductToolbar";

const ProductListingPage = () => {
  const { data } = useCategoryListQuery();

  return (
    <ErrorBoundary fallback={<Fallback context="PLP" />}>
      <div className="flex gap-8 p-4">
        <aside className="hidden lg:block w-64 shrink-0">
          <Suspense fallback={<FilterPanelSkeleton />}>
            <FilterPanel categories={data} />
          </Suspense>
        </aside>
        <main className="flex-1">
          <Suspense fallback={<ProductsSkeleton />}>
            <ProductToolbar />
            <ProductsContainer />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <FilterFAB categories={data} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default ProductListingPage;
