import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { ProductCardProps } from "../types";

const ProductCard = ({
  id,
  title,
  description,
  price,
  brand,
  image,
  rating,
  discountPercentage,
}: ProductCardProps) => {
  const discountFraction = discountPercentage / 100;

  const mrp =
    discountFraction >= 0.005 ? price / (1 - discountFraction) : price;

  const mrpRounded =
    discountFraction >= 0.005 ? Math.ceil(mrp * 100) / 100 : price;

  const priceDisplay = Math.round(price);
  const mrpDisplay = Math.round(mrpRounded);

  const showDiscount = discountPercentage >= 1 && mrpDisplay > priceDisplay;

  return (
    <Card className="h-full border-none bg-white shadow-xs transition hover:-translate-y-1 hover:shadow-md">
      <CardContent className="space-y-4 p-4">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-50">
          <img
            src={image}
            alt={`${id}-${title}`}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="flex items-center">
          <span className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200">
            {rating.toFixed(1)}
            <span className="text-emerald-500">★</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-600">{brand}</span>
          </span>
        </div>

        <CardHeader className="space-y-1 p-0">
          {/* <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {brand}
          </p> */}
          <p className="text-base font-semibold text-slate-900 line-clamp-1">
            {title}
          </p>
          <p className="text-sm text-slate-600 line-clamp-1">{description}</p>
        </CardHeader>

        <div className="space-y-1 text-sm">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-slate-900">
              Rs. {price.toFixed(0)}
            </span>
            {showDiscount && (
              <>
                <span className="text-sm text-slate-400 line-through">
                  Rs. {mrpRounded.toFixed(0)}
                </span>
                <span className="text-sm font-semibold text-emerald-600">
                  ({discountPercentage.toFixed(0)}% OFF)
                </span>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
