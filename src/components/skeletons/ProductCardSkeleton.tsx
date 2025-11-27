import { Card, CardContent } from "@/components/ui/card";

const ProductCardSkeleton = () => {
  return (
    <Card className="h-full border-none bg-white shadow-xs">
      <CardContent className="space-y-4 p-4">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100 animate-pulse" />

        <div className="h-8 w-32 rounded-md bg-slate-100 animate-pulse" />

        <div className="space-y-2">
          <div className="h-5 w-full rounded bg-slate-100 animate-pulse" />
          <div className="h-4 w-3/4 rounded bg-slate-100 animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardSkeleton;
