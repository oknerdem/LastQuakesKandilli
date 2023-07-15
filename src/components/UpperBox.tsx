import { toast } from 'sonner';
import { Props } from '../types/types';
import SelectedQuake from './SelectedQuake';
import NoSelectedQuake from './NoSelectedQuake';

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
      className="h-[20%] md:max-w-3xl max-w-lg w-full dark:bg-neutral-800/60 rounded-md border dark:border-neutral-700/80 bg-neutral-100/60 border-neutral-200 items-center justify-center flex py-16 px-6 text-center cursor-pointer md:hover:bg-neutral-200/50 md:dark:hover:bg-neutral-700/50 duration-200 md:active:bg-neutral-200/80 md:active:dark:bg-neutral-600/60"
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
      title={`${!selected ? 'Deprem seçin' : 'Deprem konumu panoya kopyala.'}`}
    >
      {selected ? (
        <SelectedQuake betterDate={betterDate} selected={selected} />
      ) : (
        <NoSelectedQuake />
      )}
    </section>
  );
}
