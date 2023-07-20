import { useStore } from '../context/store';
import SearchOpener from './SearchOpener';
import SearchBox from './SearchBox';

export default function Search() {
  const { isOpen, setIsOpen } = useStore();

  return (
    <section>
      {!isOpen ? (
        <SearchOpener setIsOpen={setIsOpen} />
      ) : (
        <SearchBox setIsOpen={setIsOpen} />
      )}
    </section>
  );
}
