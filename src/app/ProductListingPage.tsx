import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Fallback from "@/components/fallbacks/Fallback";
import SkeletonLoader from "@/components/skeletons/SkeletonLoader";
import ProductsContainer from "@/features/products/components/ProductsContainer";

const ProductListingPage = () => {
  return (
    <ErrorBoundary fallback={<Fallback />}>
      <Suspense fallback={<SkeletonLoader />}>
        <h1 className="text-3xl font-bold underline">Ecommerce PLP</h1>
        <ProductsContainer />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ProductListingPage;
