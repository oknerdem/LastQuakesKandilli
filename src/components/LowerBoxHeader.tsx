import FilterButtons from './FilterButtons';

type LowerBoxHeaderProps = {
  filter: {
    name: string;
    value: string;
  }[];
  selectedFilter: string | null;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function LowerBoxHeader({
  filter,
  selectedFilter,
  setSelectedFilter,
}: LowerBoxHeaderProps) {
  return (
    <section className="px-4 pt-2 w-full flex items-center justify-between">
      <div className="font-semibold text-base">Son depremler</div>
      <FilterButtons
        filter={filter}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </section>
  );
}
