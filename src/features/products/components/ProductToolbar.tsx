import { useSearchParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low To High", value: "price-asc" },
  { label: "Price: High To Low", value: "price-desc" },
];

const ProductToolbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sort") || "recommended";
  const selectedSortLabel =
    sortOptions.find((opt) => opt.value === currentSort)?.label ||
    "Recommended";

  const handleSortChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === "recommended") {
      newParams.delete("sort");
    } else {
      newParams.set("sort", value);
    }
    setSearchParams(newParams, { replace: true });
  };

  return (
    <div className="flex items-center justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            Sort by: {selectedSortLabel}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {sortOptions.map((option, index) => (
            <div key={option.value}>
              <DropdownMenuItem
                onClick={() => handleSortChange(option.value)}
                className={currentSort === option.value ? "bg-slate-100" : ""}
              >
                {option.label}
              </DropdownMenuItem>
              {index < sortOptions.length - 1 && <DropdownMenuSeparator />}
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProductToolbar;
