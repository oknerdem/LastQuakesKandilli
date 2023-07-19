import { toast } from 'sonner';
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
          navigator.clipboard
            .writeText(`${selected.title}`)
            .catch((err: string) => {
              toast.error(`Deprem konumu panoya kopyalanamadı. (${err})`);
            });
          toast.success('Deprem konumu panoya kopyalandı.', {
            description: `${selected.title}`,
          });
        }
      }}
      title={`${!selected ? 'Deprem seçin' : 'Deprem konumu panoya kopyala'}`}
    >
      {selected ? (
        <SelectedQuake betterDate={betterDate} selected={selected} />
      ) : (
        <NoSelectedQuake />
      )}
    </section>
  );
}
