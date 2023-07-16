/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Props } from '../types/types';

const getQuakes = async () => {
  const url = 'https://api.orhanaydogdu.com.tr/deprem/kandilli/live';
  const response = await fetch(url);
  const data = await response.json();
  return data.result as Props[];
};

export default getQuakes;
