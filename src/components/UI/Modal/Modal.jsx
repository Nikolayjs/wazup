import React from 'react';
import styles from './Modal.module.css';
const Modal = ({ title, children, close }) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.modalBg}></div>
        <div className={styles.modalWrapper}>
          <div className={styles.modalContent}>
            <div className="relative p-5">
              <div className="text-center">
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium text-[#e9edef]">{title}</h3>
                  <div className="mt-2 text-sm text-gray-500 flex flex-col">{children}</div>
                </div>
              </div>
              <div className="mt-5 flex justify-end gap-3">
                <button onClick={close} type="button" className={styles.btn}>
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
