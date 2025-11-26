import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FilterPanelProps } from "../types";

// TODO: refactor
const ratingFilters = ["4★ & above", "3★ & above", "2★ & above"];

const FilterPanel = ({ categories }: FilterPanelProps) => {
  return (
    <aside className="hidden w-72 shrink-0 rounded-xl border border-slate-100 bg-white p-4 shadow-sm lg:block">
      <header className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Filters
          </p>
        </div>
        <Button variant="ghost" size="sm" className="text-xs text-slate-500">
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
                  className="flex cursor-pointer items-center gap-2 text-sm text-slate-700"
                >
                  <input
                    type="checkbox"
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
            <div className="space-y-2">
              {ratingFilters.map((rating) => (
                <label
                  key={rating}
                  className="flex cursor-pointer items-center gap-2 text-sm text-slate-700"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
                  />
                  <span className="flex items-center gap-1">
                    {rating}
                    <span className="text-xs text-amber-500">★</span>
                  </span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default FilterPanel;
