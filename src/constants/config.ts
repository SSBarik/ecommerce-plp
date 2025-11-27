export const API_CONFIG = {
  PRODUCTS_LIMIT: 200,
} as const;

export const PAGINATION_CONFIG = {
  PRODUCTS_PER_PAGE: 16,
} as const;

export const UI_CONFIG = {
  CATEGORY_PREVIEW_COUNT: 10,
  RATING_FILTERS: [
    { label: "4★ & above", value: 4 },
    { label: "3★ & above", value: 3 },
    { label: "2★ & above", value: 2 },
    { label: "1★ & above", value: 1 },
  ] as const,
} as const;

export const QUERY_CONFIG = {
  STALE_TIME_MS: 1000 * 60,
  RETRY_COUNT: 1,
} as const;

export const STORAGE_KEYS = {
  APP_STORAGE: "ecommerce-plp-app-storage",
} as const;
