import { createContext, useContext, useState } from 'react';
import { Props } from '../types/types';

const StoreContext = createContext<{
  data: Array<Props>;
  setData: (data: Array<Props>) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}>({
  data: [],
  setData: (): void => {
    return;
  },
  isOpen: false,
  setIsOpen: (): void => {
    return;
  },
});

export const StoreProvider = ({
  children,
}: React.PropsWithChildren<{
  children: React.ReactNode;
}>) => {
  const [data, setData] = useState<Array<Props>>([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StoreContext.Provider value={{ data, setData, isOpen, setIsOpen }}>
      {children}
    </StoreContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStore = () => useContext(StoreContext);
