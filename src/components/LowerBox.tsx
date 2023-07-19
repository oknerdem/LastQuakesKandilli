import { useState } from 'react';
import { LowerBoxProps } from '../types/types';
import Quakes from './Quakes';
import LowerBoxHeader from './LowerBoxHeader';
import LoadingIcon from './LoadingIcon';
import filter from '../data/filter';
import styles from '../App.module.css';

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
    <section className={styles.lowerBox}>
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
