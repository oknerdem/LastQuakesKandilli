import { useState } from 'react';
import { useStore } from '../context/store';
import SearchBoxCloser from './SearchBoxCloser';

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

export default function SearchBoxAction({ setIsOpen }: Props) {
  const { setData, data } = useStore();
  const [value, setValue] = useState('');
  const [originalData] = useState(data);

  return (
    <div className="min-w-full w-64 min-h-full h-fit dark:bg-neutral-800 bg-neutral-100 rounded-lg border border-neutral-300 dark:border-neutral-700 dark:text-neutral-300 text-neutral-700 flex items-center justify-center px-0.5 active:bg-neutral-200/70 dark:active:bg-neutral-700/70 duration-200">
      <input
        className="w-full bg-transparent outline-none dark:placeholder:text-neutral-500 placeholder:text-neutral-600 px-2 py-2 rounded-lg"
        placeholder="Deprem ara..."
        title="Deprem ara"
        value={value}
        onChange={e => {
          setValue(e.target.value);
          setData(
            originalData.filter(
              quake =>
                quake.title
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase()) ||
                quake.mag.toString().includes(e.target.value) ||
                quake.title.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
        }}
      />
      <SearchBoxCloser
        setIsOpen={setIsOpen}
        setData={setData}
        originalData={originalData}
      />
    </div>
  );
}
