type NoFilteredQuakeProps = {
  selectedFilter: string | null;
};

export default function NoFilteredQuake({
  selectedFilter,
}: NoFilteredQuakeProps) {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="text-sm text-neutral-500 dark:text-neutral-400">
        {selectedFilter === 'all'
          ? 'Deprem bulunamadı.'
          : 'Bu kriterlere uygun deprem bulunamadı.'}
      </div>
    </div>
  );
}
