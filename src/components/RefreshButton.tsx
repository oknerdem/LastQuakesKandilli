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
        setTimeout(() => {
          setData([]);
          setData(res);
          setAnimate(false);
          toast.success('Depremler başarıyla güncellendi.');
        }, 1400);
      })
      .catch((err: string) => {
        toast.error(`Bir sorun oluştu. (${err})`);
      });
  };

  return (
    <button
      className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-600 active:bg-neutral-300/70 dark:active:bg-neutral-600/60 duration-200 text-xs bg-neutral-200 dark:bg-neutral-700/70"
      onClick={animate ? undefined : refreshHandler}
      title="Depremleri güncelle"
    >
      <span className={`${animate ? 'animate-reverse-spin' : ''}`}>
        <TbRefresh />
      </span>
    </button>
  );
}
