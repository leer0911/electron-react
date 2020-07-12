import React from 'react';
import { MessageBox } from '../../containers';
import { BasicLayout } from '../../layouts';
import { fetchBaidu } from '../../services';

export default function Home() {
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetchBaidu();
      console.log(res);
    };
    fetchData();
  }, []);

  return (
    <BasicLayout>
      <MessageBox />
    </BasicLayout>
  );
}
