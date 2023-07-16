import { TbMathEqualGreater } from 'react-icons/tb';
import RefreshButton from './RefreshButton';

type FilterButtonsProps = {
  filter: {
    name: string;
    value: string;
  }[];
  selectedFilter: string | null;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function FilterButtons({
  filter,
  selectedFilter,
  setSelectedFilter,
}: FilterButtonsProps) {
  return (
    <div className="flex gap-2">
      <RefreshButton />
      {filter.map(filter => {
        return (
          <button
            className={`flex items-center gap-1 px-1.5 py-1 rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-600 active:bg-neutral-300/70 dark:active:bg-neutral-600/60 duration-200 text-xs ${
              selectedFilter === filter.value
                ? 'bg-neutral-300 dark:bg-neutral-600/90'
                : 'bg-neutral-200 dark:bg-neutral-700/70'
            }`}
            onClick={() => {
              setSelectedFilter(filter.value);
            }}
            key={filter.value}
            title={filter.name}
          >
            <TbMathEqualGreater />
            {filter.name}
          </button>
        );
      })}
    </div>
  );
}
