import { apiClient } from "@/lib/apiClient";
import { productsResponseSchema, type ProductsResponse } from "../schemas";

export const getProducts = async (): Promise<ProductsResponse> => {
  try {
    const res = await apiClient.get<ProductsResponse>("products");
    return productsResponseSchema.parse(res.data);
  } catch {
    throw new Error("Unable to Fetch Products");
  }
};
