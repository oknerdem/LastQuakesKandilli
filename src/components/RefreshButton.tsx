import { useState } from 'react';
import { toast } from 'sonner';
import { TbRefresh } from 'react-icons/tb';
import { useStore } from '../context/store';
import getQuakes from '../lib/quakes';
import styles from '../App.module.css';

export default function RefreshButton() {
  const [animate, setAnimate] = useState(false);
  const { setData, setIsOpen } = useStore();

  const refreshHandler = () => {
    setAnimate(true);
    setIsOpen(false);
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
      className={styles.refreshButton}
      onClick={animate ? undefined : refreshHandler}
      title="Depremleri güncelle"
    >
      <span className={`${animate ? 'animate-reverse-spin' : ''}`}>
        <TbRefresh />
      </span>
    </button>
  );
}
