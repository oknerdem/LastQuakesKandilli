import QuakesTable from './QuakesTable';

type LowerBoxProps = {
  loading: boolean;
  data: {
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
};

export default function LowerBox({
  loading,
  data,
  setSelected,
}: LowerBoxProps) {
  return (
    <section className="flex flex-col gap-2 md:max-w-3xl max-w-lg w-full dark:bg-neutral-800/60 rounded-t-md border-t border-x dark:border-neutral-700/80 h-[58%] bg-neutral-100/60 border-neutral-200/80">
      <section className="px-4 pt-2 font-semibold text-base w-full">
        <div>Son depremler</div>
      </section>
      {loading ? (
        <div className="flex w-full h-full items-center justify-center">
          <div className="w-6 h-6 rounded-full animate-spin border-2 border-solid dark:border-neutral-400 border-neutral-500 border-t-transparent dark:border-t-transparent" />
        </div>
      ) : (
        <section className="overflow-auto m-auto w-full flex flex-col gap-2 px-4 pb-2">
          {data?.map(item => (
            <QuakesTable key={item._id} setSelected={setSelected} item={item} />
          ))}
        </section>
      )}
    </section>
  );
}
