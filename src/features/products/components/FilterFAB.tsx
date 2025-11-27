import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import FilterContent from "./FilterContent";
import type { FilterPanelProps } from "../types";
import { useFilters } from "../hooks/useFilters";

const FilterFAB = ({ categories }: FilterPanelProps) => {
  const [open, setOpen] = useState(false);
  const {
    selectedCategories,
    selectedRating,
    handleCategoryChange,
    handleRatingChange,
    handleReset,
    hasActiveFilters,
    activeFilterCount,
  } = useFilters();

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-white text-slate-900 shadow-lg transition-all hover:scale-105 hover:bg-slate-50 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16 lg:hidden"
        size="icon"
      >
        <Filter className="h-6 w-6 sm:h-7 sm:w-7" />
        {activeFilterCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-semibold text-white sm:h-7 sm:w-7">
            {activeFilterCount}
          </span>
        )}
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="flex h-full w-[85%] flex-col sm:w-3/4 sm:max-w-sm lg:hidden"
        >
          <SheetHeader>
            <div className="flex items-center uppercase justify-between">
              <SheetTitle>Filters</SheetTitle>
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
            </div>
          </SheetHeader>
          <div className="mt-6 flex-1 overflow-y-auto">
            <FilterContent
              categories={categories}
              selectedCategories={selectedCategories}
              selectedRating={selectedRating}
              onCategoryChange={handleCategoryChange}
              onRatingChange={handleRatingChange}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FilterFAB;
