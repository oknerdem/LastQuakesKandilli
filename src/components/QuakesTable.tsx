import { Props } from '../types/types';

type QuakesTableProps = {
  item: Props;
  setSelected: React.Dispatch<React.SetStateAction<Props | null>>;
};

function QuakesTable({ setSelected, item }: QuakesTableProps) {
  const howLongAgo = (date: Date) => {
    const dateNow = new Date();
    const dateThen = new Date(date);
    const diff = dateNow.getTime() - dateThen.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    return { hours, minutes };
  };

  const { hours, minutes } = howLongAgo(item.date);
  const hoursAgo = hours >= 1 ? hours : minutes;
  const type = hours >= 1 ? 'saat' : 'dakika';
  const pastTime =
    hoursAgo.toString() + ' ' + type + ' önce' === '24 saat önce'
      ? '1 gün önce'
      : hoursAgo.toString() + ' ' + type + ' önce';

  return (
    <div
      className="dark:bg-neutral-700/50 bg-neutral-200/50 rounded-md py-1.5 px-3 w-full flex justify-between items-start hover:opacity-60 active:opacity-80 duration-200 cursor-pointer"
      onClick={() => setSelected(item)}
      title={item.title}
    >
      <span className="text-sm font-normal md:max-w-full max-w-[16rem]">
        {item.location_properties.epiCenter.name
          ? item.location_properties.epiCenter.name
          : item.title}{' '}
        ·
        <span className="font-normal ml-1 dark:text-neutral-400 text-neutral-600">
          {pastTime}
        </span>
      </span>

      <span className={`${item.mag > 4.0 ? 'text-rose-500' : ''}`}>
        {item.mag}
      </span>
    </div>
  );
}

export default QuakesTable;
