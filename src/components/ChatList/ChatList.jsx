import React from 'react';
import ContactInput from '../UI/Input/ContactInput';
import ChatListElement from './ChatListElement';
import styles from './ChatList.module.css';
const ChatList = ({ numberHandler }) => {
  return (
    <div className={styles.chatList}>
      <div className={styles.chatListContainer}>
        <div className={styles.chatListContent}>
          <ContactInput numberHandler={numberHandler} />
          <ChatListElement numberHandler={numberHandler} />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
