import { Heart } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useWishlistStore } from "@/store/useWishlistStore";
import type { ProductCardProps } from "../types";

const ProductCard = ({
  id,
  title,
  price,
  brand,
  image,
  rating,
  discountPercentage,
}: ProductCardProps) => {
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(id);

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
      <CardContent className="space-y-4 p-3">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-50">
          <img
            src={image}
            alt={`${id}-${title}`}
            className="h-full w-full object-cover transition duration-300"
            loading="lazy"
          />
          <button
            className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(id);
            }}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                inWishlist ? "fill-rose-500 text-rose-500" : "text-slate-400"
              }`}
            />
          </button>
          <div className="absolute left-2 bottom-2 z-10 inline-flex items-center gap-2 rounded-md border border-white/60 bg-white/40 px-3 py-1 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-md">
            {rating.toFixed(1)}
            <span className="text-emerald-500">★</span>
          </div>
        </div>

        <CardHeader className="space-y-1 p-0">
          {brand && (
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {brand}
            </p>
          )}
          <p className="text-base font-semibold text-slate-900 line-clamp-1">
            {title}
          </p>
        </CardHeader>

        <div className="space-y-0.5 text-[10px] sm:text-xs md:text-sm">
          <div className="flex flex-wrap items-baseline gap-1.5 md:gap-1">
            <span className="text-sm font-semibold text-slate-900 sm:text-base md:text-md">
              Rs. {price.toFixed(0)}
            </span>
            {showDiscount && (
              <>
                <span className="text-[10px] text-slate-400 line-through sm:text-xs">
                  Rs. {mrpRounded.toFixed(0)}
                </span>
                <span className="text-[8px] font-normal text-emerald-600 sm:text-xs">
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
