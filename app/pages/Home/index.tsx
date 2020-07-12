import React from 'react';
import { MessageBox } from '../../containers';
import { BasicLayout } from '../../layouts';
import { fetchUsers } from '../../services';

export default function Home() {
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetchUsers();
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
