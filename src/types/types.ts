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
