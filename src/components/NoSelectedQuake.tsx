export default function NoSelectedQuake() {
  return (
    <section className="flex flex-col justify-center items-center gap-2">
      <h3 className="font-medium text-base">Deprem seçin</h3>
      <p className="dark:text-neutral-300 text-neutral-500 text-xs">
        Lütfen detaylarını görmek istediğiniz depremi seçin
      </p>
    </section>
  );
}
