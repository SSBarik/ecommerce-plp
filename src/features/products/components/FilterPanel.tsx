import { Button } from "@/components/ui/button";
import type { FilterPanelProps } from "../types";
import FilterContent from "./FilterContent";
import { useFilters } from "../hooks/useFilters";

const FilterPanel = ({ categories }: FilterPanelProps) => {
  const {
    selectedCategories,
    selectedRating,
    handleCategoryChange,
    handleRatingChange,
    handleReset,
    hasActiveFilters,
  } = useFilters();

  return (
    <aside className="hidden w-72 shrink-0 rounded-xl border border-slate-100 bg-white p-4 shadow-sm lg:block">
      <header className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Filters
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className={`text-xs text-slate-500 ${
            hasActiveFilters ? "" : "invisible"
          }`}
          onClick={handleReset}
        >
          Clear All
        </Button>
      </header>

      <FilterContent
        categories={categories}
        selectedCategories={selectedCategories}
        selectedRating={selectedRating}
        onCategoryChange={handleCategoryChange}
        onRatingChange={handleRatingChange}
      />
    </aside>
  );
};

export default FilterPanel;
