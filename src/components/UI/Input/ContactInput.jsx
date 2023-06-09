import React from 'react';
import { getChat } from '../../../api/service';
import { useFetching } from '../../../hooks/useFetching';
import styles from './Input.module.css';
const ContactInput = ({ numberHandler }) => {
  const [phone, setPhone] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const [fetchMessages] = useFetching(async () => {
    if (phone) {
      const response = await getChat(`${phone}`, 100);
      setMessages(response);
    }
  });

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.length === 11) {
      setPhone(e.target.value);
      numberHandler(e.target.value);
    }
  };

  React.useState(() => {
    fetchMessages();
  }, [phone]);

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputContent}>
        <svg viewBox="0 0 24 24" width="24" height="24" className="cursor-pointer">
          <path
            fill="#aebac1"
            d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
          ></path>
        </svg>
        <input
          type="text"
          className={styles.input}
          placeholder="Введите номер телефона"
          onKeyDown={(e) => onKeyDown(e)}
        />
      </div>
      {/* <svg viewBox="0 0 24 24" width="20" height="20" className="cursor-pointer">
        <path fill="#aebac1" d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"></path>
      </svg> */}
    </div>
  );
};

export default ContactInput;
