import { createContext, useContext, useState } from 'react';
import { Props } from '../types/types';

const StoreContext = createContext<{
  data: Array<Props>;
  setData: (data: Array<Props>) => void;
}>({
  data: [],
  setData: (): void => {
    return;
  },
});

export const StoreProvider = ({
  children,
}: React.PropsWithChildren<{
  children: React.ReactNode;
}>) => {
  const [data, setData] = useState<Array<Props>>([]);

  return (
    <StoreContext.Provider value={{ data, setData }}>
      {children}
    </StoreContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStore = () => useContext(StoreContext);
