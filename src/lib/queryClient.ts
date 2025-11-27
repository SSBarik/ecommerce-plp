import { QueryClient } from "@tanstack/react-query";
import { QUERY_CONFIG } from "@/constants/config";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: QUERY_CONFIG.RETRY_COUNT,
      staleTime: QUERY_CONFIG.STALE_TIME_MS,
    },
  },
});
