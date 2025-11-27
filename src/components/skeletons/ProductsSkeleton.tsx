import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end">
        <div className="h-10 w-40 rounded-md bg-slate-100 animate-pulse" />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSkeleton;
