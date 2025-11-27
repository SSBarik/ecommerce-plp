import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ratingFilters = [
  { label: "4★ & above", value: 4 },
  { label: "3★ & above", value: 3 },
  { label: "2★ & above", value: 2 },
  { label: "1★ & above", value: 1 },
];

interface FilterContentProps {
  categories: string[];
  selectedCategories: string[];
  selectedRating: string | null;
  onCategoryChange: (category: string, checked: boolean) => void;
  onRatingChange: (value: string) => void;
}

const FilterContent = ({
  categories,
  selectedCategories,
  selectedRating,
  onCategoryChange,
  onRatingChange,
}: FilterContentProps) => {
  const CATEGORY_PREVIEW_COUNT = 10;
  const [showAllCategories, setShowAllCategories] = useState(false);

  const hasExtraCategories = categories.length > CATEGORY_PREVIEW_COUNT;
  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, CATEGORY_PREVIEW_COUNT);
  const remainingCount = hasExtraCategories
    ? categories.length - CATEGORY_PREVIEW_COUNT
    : 0;

  return (
    <Accordion type="multiple" defaultValue={["categories", "rating"]}>
      <AccordionItem value="categories">
        <AccordionTrigger className="text-sm font-semibold text-slate-900">
          Categories
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            {visibleCategories.map((category) => (
              <label
                key={category}
                className="flex cursor-pointer items-center gap-2 text-sm text-slate-700 hover:font-medium capitalize"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={(e) => onCategoryChange(category, e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
                />
                {category}
              </label>
            ))}
            {!showAllCategories && hasExtraCategories && (
              <button
                type="button"
                onClick={() => setShowAllCategories(true)}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                +{remainingCount} more
              </button>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="rating" className="border-none">
        <AccordionTrigger className="text-sm font-semibold text-slate-900">
          Rating
        </AccordionTrigger>
        <AccordionContent>
          <RadioGroup
            value={selectedRating || ""}
            onValueChange={onRatingChange}
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
                </label>
              </div>
            ))}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterContent;
