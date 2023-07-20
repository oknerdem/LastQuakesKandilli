import { RiCloseFill } from 'react-icons/ri';
import { Props } from '../types/types';

type SearchBoxCloserProps = {
  setIsOpen: (isOpen: boolean) => void;
  setData: (data: Props[]) => void;
  originalData: Props[];
};

export default function SearchBoxCloser({
  setIsOpen,
  setData,
  originalData,
}: SearchBoxCloserProps) {
  return (
    <span
      className="cursor-pointer text-xs dark:bg-neutral-700/50 bg-neutral-300/50 hover:bg-neutral-300/90 dark:hover:bg-neutral-600/60 px-2 py-2.5 rounded-r-md duration-200"
      onClick={() => {
        setIsOpen(false);
        setData(originalData);
      }}
      title="Arama menüsünü kapat"
    >
      <RiCloseFill />
    </span>
  );
}
