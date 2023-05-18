import React from 'react';

const Badge = () => {
  return (
    <div class="flex flex-col flex-none text-xs items-end space-y-1 w-20 pr-2">
      <span class="text-[#00a884] font-bold mt-2"></span>
      <div class="flex bg-[#00a884] justify-center text-xs items-center rounded-full w-5 h-5 text-black">
        1
      </div>
    </div>
  );
};

export default Badge;
