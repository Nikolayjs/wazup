import React from 'react';

import Input from '../UI/Input/Input';
import ChatListElement from './ChatListElement';
const ChatList = ({ numberHandler }) => {
  return (
    <div className="flex flex-col space-y-2 flex-grow">
      <div className="flex flex-col space-y-4 flex-grow">
        <div className="overflow-x-hidden overflow-y-auto flex-grow scroller h-10">
          <Input numberHandler={numberHandler} />
          <ChatListElement numberHandler={numberHandler} />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
