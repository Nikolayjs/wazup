import React from 'react';
import styles from './Chat.module.css';
import ChatHeader from './ChatHeader';
import Message from './Messages/Message';
const Chat = ({ messages, number, user, getMessages }) => {
  const [setIsLoading, isLoading] = getMessages;

  return (
    <div className={styles.container}>
      <ChatHeader number={number} user={user} />
      <div className="flex flex-col space-y-4 w-full py-4 px-10 xl:px-24 bg-black-rgba scroller overflow-x-hidden overflow-y-auto flex-grow">
        {/* <!-- Date --> */}
        <div className="flex justify-center">
          <span
            className="absolute px-2 py-1 bg-[#182229] text-[#aebac1] rounded-md text-sm cursor-pointer"
            onClick={() => setIsLoading(!isLoading)}
          >
            Обновить
          </span>
        </div>
        {messages ? (
          <>
            {messages.map((m) => (
              <Message key={m.idMessage} type={m.type} text={m.textMessage} time={m.timestamp} />
            ))}
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Chat;
