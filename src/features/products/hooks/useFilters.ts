import { useSearchParams } from "react-router-dom";

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoriesParam = searchParams.get("categories");
  const selectedCategories = categoriesParam
    ? categoriesParam
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean)
    : [];
  const selectedRating = searchParams.get("rating");

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newParams = new URLSearchParams(searchParams);
    const currentCategories =
      newParams
        .get("categories")
        ?.split(",")
        .map((c) => c.trim())
        .filter(Boolean) || [];

    let updatedCategories: string[];
    if (checked) {
      updatedCategories = [...currentCategories, category];
    } else {
      updatedCategories = currentCategories.filter((c) => c !== category);
    }

    if (updatedCategories.length > 0) {
      newParams.set("categories", updatedCategories.join(","));
    } else {
      newParams.delete("categories");
    }

    setSearchParams(newParams, { replace: true });
  };

  const handleRatingChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    const currentRating = newParams.get("rating");

    if (value === currentRating) {
      newParams.delete("rating");
    } else {
      newParams.set("rating", value);
    }

    setSearchParams(newParams, { replace: true });
  };

  const handleReset = () => {
    setSearchParams({}, { replace: true });
  };

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedRating !== null;

  const activeFilterCount =
    selectedCategories.length + (selectedRating ? 1 : 0);

  return {
    selectedCategories,
    selectedRating,
    handleCategoryChange,
    handleRatingChange,
    handleReset,
    hasActiveFilters,
    activeFilterCount,
  };
};
