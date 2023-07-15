import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import { Props } from './types/types';
import Main from './components/Main';
import Box from './components/Box';
import UpperBox from './components/UpperBox';
import LowerBox from './components/LowerBox';

function App() {
  const [data, setData] = useState<Props[]>([]);
  const [selected, setSelected] = useState<Props | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://api.orhanaydogdu.com.tr/deprem/kandilli/live')
      .then(response => response.json())
      .then((data: { result: Props[] }) => {
        setData(data.result);
        setLoading(false);
      })
      .catch(err => {
        console.log('err', err);
        setLoading(false);
      });
  }, []);

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
