import React from 'react';
import Sidebar from '../../components/Navigate/Sidebar/Sidebar';
import styles from './MainLayout.module.css';
import Chat from '../../components/Chat/Chat';
import Footer from '../../components/Navigate/Footer/Footer';
import { useFetching } from '../../hooks/useFetching';
import { getChat, getContactInfo } from '../../api/service';

const MainLayout = () => {
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
      const response = await getContactInfo(contactNumber);
      setContact(response);
    }
  });

  React.useEffect(() => {
    fetchMessages();
    fetchInfo();
  }, [contactNumber, isLoading]);

  const sendMessage = async (message) => {
    await sendMessage(contactNumber, message);
    setIsLoading(!isLoading);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Sidebar numberHandler={setContactNumber} />
        <div className="flex flex-col bg-[#0b141a] overflow-hidden flex-grow">
          <Chat
            messages={messages}
            number={contactNumber}
            user={contact}
            getMessages={[setIsLoading, isLoading]}
          />
          <Footer contact={contactNumber} user={contact} sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
