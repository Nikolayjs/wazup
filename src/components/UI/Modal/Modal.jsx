import React from 'react';

const Modal = ({ title, children, close }) => {
  return (
    <div className="h-full">
      <div>
        <div className="fixed inset-0 z-10 bg-black/30"></div>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
          <div className="mx-auto w-full overflow-hidden rounded-lg bg-[#111b21] shadow-xl sm:max-w-sm">
            <div className="relative p-5">
              <div className="text-center">
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium text-[#e9edef]">{title}</h3>
                  <div className="mt-2 text-sm text-gray-500 flex flex-col">{children}</div>
                </div>
              </div>
              <div className="mt-5 flex justify-end gap-3">
                <button
                  onClick={close}
                  type="button"
                  className="flex-1 rounded-lg border border-green-700 bg-green-700 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-600 hover:bg-green-600 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
