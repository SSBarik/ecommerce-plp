export interface PricingInfo {
  priceDisplay: number;
  mrpRounded: number;
  showDiscount: boolean;
}

export const calculatePricing = (
  price: number,
  discountPercentage: number
): PricingInfo => {
  const discountFraction = discountPercentage / 100;

  const mrp =
    discountFraction >= 0.005 ? price / (1 - discountFraction) : price;

  const mrpRounded =
    discountFraction >= 0.005 ? Math.ceil(mrp * 100) / 100 : price;

  const priceDisplay = Math.round(price);
  const mrpDisplay = Math.round(mrpRounded);

  const showDiscount = discountPercentage >= 1 && mrpDisplay > priceDisplay;

  return {
    priceDisplay,
    mrpRounded,
    showDiscount,
  };
};
