import { useCategoryListQuery } from "@/features/categories/hooks/useCategoryListQuery";
import FilterPanel from "./FilterPanel";
import FilterFAB from "./FilterFAB";

const FiltersContainer = () => {
  const { data } = useCategoryListQuery();

  return (
    <>
      <FilterPanel categories={data} />
      <div className="lg:hidden">
        <FilterFAB categories={data} />
      </div>
    </>
  );
};

export default FiltersContainer;
