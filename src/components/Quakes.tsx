import QuakesTable from './QuakesTable';
import NoFilteredQuake from './NoFilteredQuake';

type QuakesProps = {
  filteredData: {
    _id: number;
    title: string;
    mag: number;
    date: Date;
    location_properties: {
      epiCenter: {
        name: string;
      };
    };
  }[];
  setSelected: React.Dispatch<
    React.SetStateAction<{
      _id: number;
      title: string;
      mag: number;
      date: Date;
      location_properties: {
        epiCenter: {
          name: string;
        };
      };
    } | null>
  >;
  selectedFilter: string | null;
};

export default function Quakes({
  filteredData,
  setSelected,
  selectedFilter,
}: QuakesProps) {
  return (
    <section className="overflow-auto m-auto w-full h-full flex flex-col gap-2 px-4 pb-2 overflow-y-scroll">
      {filteredData?.map(item => (
        <QuakesTable key={item._id} setSelected={setSelected} item={item} />
      ))}
      {filteredData?.length === 0 && (
        <NoFilteredQuake selectedFilter={selectedFilter} />
      )}
    </section>
  );
}
