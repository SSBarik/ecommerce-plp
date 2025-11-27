import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductListingPageFallbackProps {
  error?: Error;
}

const ProductListingPageFallback = ({
  error,
}: ProductListingPageFallbackProps) => {
  return (
    <div className="flex min-h-[calc(100vh-2rem)] flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-50">
        <AlertTriangle className="h-8 w-8 text-rose-500" />
      </div>
      <h1 className="text-2xl font-semibold text-slate-900">
        Something went wrong
      </h1>
      <p className="max-w-md text-sm text-slate-600">
        {error?.message ||
          "We couldn't load the product listing. Please try again."}
      </p>
      <Button onClick={() => window.location.reload()}>Reload Page</Button>
    </div>
  );
};

export default ProductListingPageFallback;
