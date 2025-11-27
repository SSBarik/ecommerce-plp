import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import ProductListingPageFallback from "@/components/fallbacks/ProductListingPageFallback";
import ProductsSkeleton from "@/components/skeletons/ProductsSkeleton";
import ProductsContainer from "@/features/products/components/ProductsContainer";
import FilterPanel from "@/features/products/components/FilterPanel";
import FilterFAB from "@/features/products/components/FilterFAB";
import { useCategoryListQuery } from "@/features/categories/hooks/useCategoryListQuery";
import ProductToolbar from "@/features/products/components/ProductToolbar";

const ProductListingPage = () => {
  const { data } = useCategoryListQuery();

  return (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <ProductListingPageFallback error={error} />
      )}
    >
      <div className="flex flex-col gap-6 p-3 lg:flex-row lg:gap-4 lg:p-4">
        <FilterPanel categories={data} />
        <main className="flex-1">
          <Suspense fallback={<ProductsSkeleton />}>
            <ProductToolbar />
            <ProductsContainer />
          </Suspense>
        </main>
        <div className="lg:hidden">
          <Suspense fallback={null}>
            <FilterFAB categories={data} />
          </Suspense>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProductListingPage;
