const FilterPanelSkeleton = () => {
  return (
    <aside className="hidden w-72 shrink-0 rounded-xl border border-slate-100 bg-white p-4 shadow-sm lg:block">
      <div className="mb-4 flex items-center justify-between">
        <div className="h-4 w-16 rounded bg-slate-100 animate-pulse" />
        <div className="h-6 w-16 rounded bg-slate-100 animate-pulse" />
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <div className="h-6 w-24 rounded bg-slate-100 animate-pulse" />
          <div className="space-y-2 pl-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-slate-100 animate-pulse" />
                <div className="h-4 w-32 rounded bg-slate-100 animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="h-6 w-20 rounded bg-slate-100 animate-pulse" />
          <div className="space-y-2 pl-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-slate-100 animate-pulse" />
                <div className="h-4 w-28 rounded bg-slate-100 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterPanelSkeleton;
