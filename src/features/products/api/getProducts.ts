import { apiClient } from "@/lib/apiClient";
import { API_CONFIG } from "@/constants/config";
import { productsResponseSchema, type ProductsResponse } from "../schemas";

export const getProducts = async (): Promise<ProductsResponse> => {
  try {
    const res = await apiClient.get<ProductsResponse>(
      `products?limit=${API_CONFIG.PRODUCTS_LIMIT}`
    );
    return productsResponseSchema.parse(res.data);
  } catch (error) {
    console.log(error);
    throw new Error("Unable to Fetch Products");
  }
};
