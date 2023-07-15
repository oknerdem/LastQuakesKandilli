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
      <h3 className="font-semibold">{selected.title}</h3>
      <p>{betterDate}</p>
      {/* <p className="font-semibold">
        {selected.location_properties.epiCenter.name}
      </p> */}
      <h4 className="font-semibold">{selected.mag}</h4>
    </div>
  );
}
