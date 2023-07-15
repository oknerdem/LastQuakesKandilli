type SelectedQuakeProps = {
  selected: {
    title: string;
    mag: number;
    location_properties: {
      epiCenter: {
        name: string;
      };
    };
  };
  betterDate: string;
};

export default function SelectedQuake({
  betterDate,
  selected,
}: SelectedQuakeProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2">
      <h3>{selected.title}</h3>
      <p>{betterDate}</p>
      <h4>{selected.mag}</h4>
    </div>
  );
}
