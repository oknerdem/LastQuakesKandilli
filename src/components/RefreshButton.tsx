import { useState } from 'react';
import { toast } from 'sonner';
import { TbRefresh } from 'react-icons/tb';
import { useStore } from '../context/store';
import getQuakes from '../lib/quakes';

export default function RefreshButton() {
  const [animate, setAnimate] = useState(false);
  const { setData } = useStore();

  const refreshHandler = () => {
    setAnimate(true);
    getQuakes()
      .then(res => {
        setData([]);
        setData(res);
      })
      .catch((err: string) => {
        toast.error(`Bir sorun oluştu. (${err})`);
      });

    setTimeout(() => {
      setAnimate(false);
      toast.success('Depremler başarıyla güncellendi.');
    }, 1500);
  };

  return (
    <button
      className="flex items-center gap-1 md:px-3 px-2 py-1 rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-600 active:bg-neutral-300/70 dark:active:bg-neutral-600/60 duration-200 text-xs bg-neutral-200 dark:bg-neutral-700/70"
      onClick={animate ? undefined : refreshHandler}
    >
      <span className={`${animate ? 'animate-spin' : ''}`}>
        <TbRefresh />
      </span>
    </button>
  );
}
