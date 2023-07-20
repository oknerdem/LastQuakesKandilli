import { motion } from 'framer-motion';
import SearchBoxAction from './SearchBoxAction';

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

export default function SearchBox({ setIsOpen }: Props) {
  return (
    <motion.section
      className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ opacity: 0, y: -20, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: -20, x: '-50%' }}
      transition={{ duration: 0.4 }}
    >
      <SearchBoxAction setIsOpen={setIsOpen} />
    </motion.section>
  );
}
