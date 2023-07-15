import { Props } from '../types/types';

type QuakesTableProps = {
  item: Props;
  setSelected: React.Dispatch<React.SetStateAction<Props | null>>;
};

function QuakesTable({ setSelected, item }: QuakesTableProps) {
  return (
    <div
      className="dark:bg-neutral-700/50 bg-neutral-200/50 rounded-md py-1.5 px-3 w-full flex justify-between items-start hover:opacity-60 active:opacity-80 duration-200 cursor-pointer"
      onClick={() => setSelected(item)}
      title={item.title}
    >
      <span className="text-sm font-normal">
        {item.location_properties.epiCenter.name
          ? item.location_properties.epiCenter.name
          : item.title}
      </span>
      <span className={`font-medium ${item.mag > 4.0 ? 'text-rose-500' : ''}`}>
        {item.mag}
      </span>
    </div>
  );
}

export default QuakesTable;
