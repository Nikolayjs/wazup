import React from 'react';

const IncomingMessages = ({ text, time }) => {
  return (
    <div className="flex flex-none space-x-6 bg-[#202c33] px-2 py-1 rounded-tr-md rounded-br-md rounded-bl-md">
      <span className="text-sm">{text}</span>
      <span className="mt-3 text-[10px] text-[#aebac1] font-bold">11:20</span>
    </div>
  );
};

export default IncomingMessages;
