import React from 'react';

const OutgoingMessages = ({ text, time }) => {
  const getDate = (time) => {
    const date = new Date(time * 1000);
    const hours = `${date.getHours()}:${date.getMinutes()}`;
    return hours;
  };
  return (
    <div className="flex flex-none space-x-6 bg-[#005c4b] px-2 py-1 rounded-tl-md rounded-br-md rounded-bl-md">
      <span className="text-sm">{text}</span>
      <span className="mt-3 text-[10px] text-[#aebac1] font-bold">
        {getDate(time)}
        <svg viewBox="0 0 16 15" width="16" height="15" className="inline-block">
          <path
            fill="#43aacc"
            d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default OutgoingMessages;
