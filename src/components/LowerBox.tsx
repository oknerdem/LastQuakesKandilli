import { useState } from 'react';
import { LowerBoxProps } from '../types/types';
import Quakes from './Quakes';
import LowerBoxHeader from './LowerBoxHeader';
import LoadingIcon from './LoadingIcon';
import filter from '../data/filter';

export default function LowerBox({
  loading,
  data,
  setSelected,
}: LowerBoxProps) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>('all');

  const filteredData = data?.filter(item =>
    selectedFilter === '3'
      ? item.mag >= 3
      : selectedFilter === '5'
      ? item.mag >= 5
      : item
  );

  return (
    <section className="flex flex-col gap-2 md:max-w-3xl max-w-lg w-full dark:bg-neutral-800/60 rounded-t-md border-t border-x dark:border-neutral-700/80 h-[70%] bg-neutral-100/60 border-neutral-200/80">
      <LowerBoxHeader
        filter={filter}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {loading ? (
        <LoadingIcon />
      ) : (
        <Quakes
          filteredData={filteredData}
          setSelected={setSelected}
          selectedFilter={selectedFilter}
        />
      )}
    </section>
  );
}
