import React from 'react';
import axiosClassic from '../../api/axios';
import Sidebar from '../../components/Navigate/Sidebar/Sidebar';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  const [user, setUser] = React.useState('');
  React.useEffect(() => {
    axiosClassic
      .get('/waInstance1101821273/getSettings/08448a7597bd4ec58e15836c49e7575e9d8a53300508491aae')
      .then((res) => setUser(res.data));
  }, []);
  console.log(user);
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  );
};

export default MainLayout;
