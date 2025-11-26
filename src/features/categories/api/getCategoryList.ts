import { apiClient } from "@/lib/apiClient";
import { categoryListSchema, type CategoryList } from "../schemas";

export const getCategoryList = async (): Promise<CategoryList> => {
  try {
    const response = await apiClient.get<CategoryList>(
      "products/category-list"
    );
    return categoryListSchema.parse(response.data);
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch category list!");
  }
};
