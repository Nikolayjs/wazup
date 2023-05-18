import React from 'react';
import styles from './Chat.module.css';
const Chat = () => {
  return (
    <div className={styles.container}>
      <div className="flex justify-between bg-[#202c33] px-4 py-2">
        <div className="flex flex-none space-x-2 items-center">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            className="rounded-full h-12 w-12"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-bold text-[#e9edef]">Flyod Miles</span>
            <span className="text-sm text-[#aebac1]">en ligne le 19/05/2022 à 15:56</span>
          </div>
        </div>
        <div className="flex flex-none items-center space-x-8">
          <svg viewBox="0 0 24 24" width="24" height="24" className="">
            <path
              fill="#aebac1"
              d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
            ></path>
          </svg>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="#aebac1"
              d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-full py-4 px-10 xl:px-24 bg-black-rgba scroller overflow-x-hidden overflow-y-auto flex-grow">
        <div className="flex text-white">
          {/* <!-- Received message text 1 --> */}
          <div className="flex flex-none space-x-6 bg-[#202c33] px-2 py-1 rounded-tr-md rounded-br-md rounded-bl-md">
            <span className="text-sm">Cc comment tu vas ?</span>
            <span className="mt-3 text-[10px] text-[#aebac1] font-bold">11:20</span>
          </div>
          {/* <!-- Received message text 1 --> */}
        </div>
        {/* <!-- Message Two --> */}
        <div className="flex text-white justify-end">
          {/* <!-- send message text 2 << --> */}
          <div className="flex flex-none space-x-6 bg-[#005c4b] px-2 py-1 rounded-tl-md rounded-br-md rounded-bl-md">
            <span className="text-sm">Cc comment tu vas ?</span>
            <span className="mt-3 text-[10px] text-[#aebac1] font-bold">
              11:20
              <svg viewBox="0 0 16 15" width="16" height="15" className="inline-block">
                <path
                  fill="#43aacc"
                  d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                ></path>
              </svg>
            </span>
          </div>
          {/* <!-- send message text 2 << --> */}
        </div>
        {/* <!-- Message Two --> */}
        {/* <!-- Date --> */}
        <div className="flex justify-center">
          <span className="px-2 py-1 bg-[#182229] text-[#aebac1] rounded-md text-sm">MARDI</span>
        </div>
        {/* <!-- Date --> */}

        {/* <!-- Message Three >> --> */}
        <div className="flex text-white">
          {/* <!-- Received message text 3 --> */}
          <div className="flex flex-none space-x-6 bg-[#202c33] px-2 py-1 rounded-tr-md rounded-br-md rounded-bl-md">
            <span className="text-sm">Petit moi je suis là hein</span>
            <span className="mt-3 text-[10px] text-[#aebac1] font-bold">09:20</span>
          </div>
          {/* <!-- Received message text 3 --> */}
        </div>
      </div>
    </div>
  );
};

export default Chat;
