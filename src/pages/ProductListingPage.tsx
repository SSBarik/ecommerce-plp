import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import ErrorBoundaryFallback from "@/components/fallbacks/ErrorBoundaryFallback";
import ProductsSkeleton from "@/components/skeletons/ProductsSkeleton";
import FilterPanelSkeleton from "@/components/skeletons/FilterPanelSkeleton";
import ProductsContainer from "@/features/products/components/ProductsContainer";
import FiltersContainer from "@/features/products/components/FiltersContainer";
import ProductToolbar from "@/features/products/components/ProductToolbar";

const ProductListingPage = () => {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => <ErrorBoundaryFallback error={error} />}
    >
      <div className="flex flex-col gap-6 p-3 lg:flex-row lg:gap-4 lg:p-4">
        <Suspense fallback={<FilterPanelSkeleton />}>
          <FiltersContainer />
        </Suspense>
        <main className="flex-1">
          <Suspense fallback={<ProductsSkeleton />}>
            <ProductToolbar />
            <ProductsContainer />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default ProductListingPage;
