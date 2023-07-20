import { motion } from 'framer-motion';

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
    <motion.div
      className="flex flex-col items-center justify-center text-center md:gap-2 gap-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>
        {selected.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          className="inline-flex shrink-0 text-xl ml-auto opacity-50 pb-1"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </h3>
      <p>{betterDate}</p>
      <h4>{selected.mag}</h4>
    </motion.div>
  );
}
