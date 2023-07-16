import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { Props } from './types/types';
import { useStore } from './context/store';
import Main from './components/Main';
import Box from './components/Box';
import UpperBox from './components/UpperBox';
import LowerBox from './components/LowerBox';
import getQuakes from './lib/quakes';

function App() {
  const { data, setData } = useStore();
  const [selected, setSelected] = useState<Props | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getQuakes()
      .then((res: Props[]) => {
        setData(res);
        setLoading(false);
      })
      .catch((err: string) => {
        toast.error(`Bir sorun oluştu. (${err})`);
        setLoading(false);
      });
  }, [setData]);

  return (
    <Main>
      <Toaster position="top-center" />
      <Box>
        <UpperBox selected={selected} />
        <LowerBox loading={loading} data={data} setSelected={setSelected} />
      </Box>
    </Main>
  );
}

export default App;
