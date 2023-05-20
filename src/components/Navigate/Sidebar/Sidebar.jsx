import React from 'react';
import Header from '../Header/Header';
import styles from './Sidebar.module.css';
import ChatList from '../../ChatList/ChatList';

const Sidebar = ({ numberHandler, logout }) => {
  return (
    <div className={styles.sidebar}>
      <Header logout={logout} />
      <ChatList numberHandler={numberHandler} />
    </div>
  );
};

export default Sidebar;
