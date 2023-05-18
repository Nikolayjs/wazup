import React from 'react';
import Sidebar from '../../components/Navigate/Sidebar/Sidebar';
import styles from './MainLayout.module.css';
import Chat from '../../components/Chat/Chat';
import Footer from '../../components/Navigate/Footer/Footer';
import { useFetching } from '../../hooks/useFetching';
import Service from '../../api/service';

const MainLayout = () => {
  const [messages, setMessages] = React.useState([]);
  const [contact, setContact] = React.useState('');
  const [contactNumber, setContactNumber] = React.useState('');

  const [fetchMessages] = useFetching(async () => {
    if (contactNumber) {
      const response = await Service.getChat(`${contactNumber}@c.us`, 100);
      setMessages(response.reverse());
    } else {
      console.log('Нет сообщений');
    }
  });

  const [fetchInfo] = useFetching(async () => {
    if (contactNumber) {
      const response = await Service.getContactInfo(contactNumber);
      setContact(response);
    } else {
      console.log('Нет сообщений');
    }
  });

  React.useEffect(() => {
    fetchMessages();
    fetchInfo();
  }, [contactNumber]);

  console.log(contact);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Sidebar numberHandler={setContactNumber} />
        <div className="flex flex-col bg-[#0b141a] overflow-hidden flex-grow">
          <Chat messages={messages} number={contactNumber} user={contact} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
