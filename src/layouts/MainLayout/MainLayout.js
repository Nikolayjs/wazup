import React from 'react';
import axiosClassic from '../../api/axios';
import Sidebar from '../../components/Navigate/Sidebar/Sidebar';
import styles from './MainLayout.module.css';
import Chat from '../../components/Chat/Chat';

const MainLayout = () => {
  const [user, setUser] = React.useState('');
  // React.useEffect(() => {
  //   axiosClassic
  //     .get('/waInstance1101821273/getSettings/08448a7597bd4ec58e15836c49e7575e9d8a53300508491aae')
  //     .then((res) => setUser(res.data));
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default MainLayout;
