import { Props } from '../types/types';
import SelectedQuake from './SelectedQuake';
import NoSelectedQuake from './NoSelectedQuake';
import styles from '../App.module.css';

type UpperBoxProps = {
  selected: Props | null;
};

export default function UpperBox({ selected }: UpperBoxProps) {
  const betterDate = selected?.date
    ? new Date(selected.date).toLocaleDateString('tr-TR', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
    : '';

  return (
    <section
      className={styles.upperBox}
      onClick={() => {
        if (!selected) return;
        else {
          navigator.clipboard.writeText(`${selected.title}`).catch(() => {
            return;
          });
          window.open(
            `https://www.google.com/maps/search/?api=1&query=${selected.title}`,
            '_blank',
            'noopener noreferrer'
          );
        }
      }}
      title={`${
        !selected ? 'Deprem seçin' : "Deprem konumunu Google Maps'te aç"
      }`}
    >
      {selected ? (
        <SelectedQuake betterDate={betterDate} selected={selected} />
      ) : (
        <NoSelectedQuake />
      )}
    </section>
  );
}
