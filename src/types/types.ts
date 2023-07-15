export type Props = {
  title: string;
  mag: number;
  date: Date;
  location_properties: {
    epiCenter: {
      name: string;
    };
  };
  _id: number;
};

export type LowerBoxProps = {
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
