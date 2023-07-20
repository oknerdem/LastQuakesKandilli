import { motion } from 'framer-motion';
import { BiChevronDown } from 'react-icons/bi';
import styles from '../App.module.css';

type SearchOpenerProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export default function SearchOpener({ setIsOpen }: SearchOpenerProps) {
  return (
    <motion.div
      className="absolute top-2 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <button
        className={styles.searchOpener}
        onClick={() => setIsOpen(true)}
        title="Arama menüsünü aç"
      >
        <span className="dark:text-neutral-400 text-neutral-600">
          <BiChevronDown />
        </span>
      </button>
    </motion.div>
  );
}
