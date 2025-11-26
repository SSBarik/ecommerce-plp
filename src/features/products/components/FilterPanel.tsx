import { useSearchParams } from "react-router";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FilterPanelProps } from "../types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// TODO: refactor
const ratingFilters = [
  { label: "4★ & above", value: 4 },
  { label: "3★ & above", value: 3 },
  { label: "2★ & above", value: 2 },
  { label: "1★ & above", value: 1 },
];

const FilterPanel = ({ categories }: FilterPanelProps) => {
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

  return (
    <aside className="hidden w-72 shrink-0 rounded-xl border border-slate-100 bg-white p-4 shadow-sm lg:block">
      <header className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Filters
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-slate-500"
          onClick={handleReset}
        >
          Reset
        </Button>
      </header>

      <Accordion type="multiple" defaultValue={["categories", "rating"]}>
        <AccordionItem value="categories">
          <AccordionTrigger className="text-sm font-semibold text-slate-900">
            Categories
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex cursor-pointer items-center gap-2 text-sm text-slate-700 capitalize"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={(e) =>
                      handleCategoryChange(category, e.target.checked)
                    }
                    className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
                  />
                  {category}
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger className="text-sm font-semibold text-slate-900">
            Rating
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup
              value={selectedRating || ""}
              onValueChange={handleRatingChange}
              className="space-y-2"
            >
              {ratingFilters.map((rating) => (
                <div key={rating.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={rating.value.toString()}
                    id={`rating-${rating.value}`}
                  />
                  <label
                    htmlFor={`rating-${rating.value}`}
                    className="flex cursor-pointer items-center gap-1 text-sm text-slate-700"
                  >
                    {rating.label}
                    <span className="text-xs text-amber-500">★</span>
                  </label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default FilterPanel;
