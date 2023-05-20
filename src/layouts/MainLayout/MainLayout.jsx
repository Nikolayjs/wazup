import React from 'react';
import Sidebar from '../../components/Navigate/Sidebar/Sidebar';
import styles from './MainLayout.module.css';
import Chat from '../../components/Chat/Chat';
import Footer from '../../components/Navigate/Footer/Footer';
import { useFetching } from '../../hooks/useFetching';
import { getChat, getContactInfo, sendMessage } from '../../api/service';

const MainLayout = ({ checkAuth }) => {
  const [messages, setMessages] = React.useState([]);
  const [contact, setContact] = React.useState('');
  const [contactNumber, setContactNumber] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const [fetchMessages] = useFetching(async () => {
    if (contactNumber) {
      const response = await getChat(`${contactNumber}@c.us`, 100);
      setMessages(response.reverse());
    }
  });
  const [fetchInfo] = useFetching(async () => {
    if (contactNumber) {
      const response = await getContactInfo(contactNumber.trim());
      setContact(response);
    }
  });

  React.useEffect(() => {
    fetchMessages();
    fetchInfo();
  }, [contactNumber, isLoading]);

  const sendMessageHandler = async (message) => {
    const res = await sendMessage(contactNumber, message);
    if (res.status === 200) {
      setTimeout(() => {
        setIsLoading(!isLoading);
      }, 1000);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('authData');
    checkAuth(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Sidebar numberHandler={setContactNumber} logout={logout} />
        <div className={styles.chat}>
          <Chat
            messages={messages}
            number={contactNumber}
            user={contact}
            getMessages={[setIsLoading, isLoading]}
          />
          <Footer contact={contactNumber} user={contact} sendMessage={sendMessageHandler} />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
