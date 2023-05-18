import React from 'react';
import ChatListElement from '../../ChatList/ChatListElement';
import Badge from '../../UI/Badge/Badge';
import Input from '../../UI/Input/Input';
import Header from '../Header/Header';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div class="flex flex-col flex-none h-full w-[30rem] border-r border-[#272f34]">
      <Header />
      <div class="flex flex-col space-y-2 flex-grow">
        <div class="flex flex-col space-y-4 flex-grow">
          <div class="overflow-x-hidden overflow-y-auto flex-grow scroller h-10">
            <Input />
            <ChatListElement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
