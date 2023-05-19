import React from 'react';
import { getAuth } from '../api/service';
import Modal from '../components/UI/Modal/Modal';
import styles from './LoginScreen.module.css';
const LoginScreen = ({ authHandler }) => {
  const [id, setId] = React.useState('');
  const [api, setApi] = React.useState('');
  const [modal, setModal] = React.useState(false);
  const [authData, setAuthData] = React.useState({});
  async function submitHandler(id, api) {
    if (!id || !api) return;
    const response = await getAuth(id, api);
    if (!response) {
      setModal(true);
    }
    if (!authData) {
      setModal(true);
    } else if (response.stateInstance) {
      authHandler(true);
      setAuthData({ id: id, api: api });
      localStorage.setItem('authData', JSON.stringify({ id: id, api: api }));
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className="flex flex-col bg-[#0b141a] overflow-hidden flex-grow justify-center items-center rounded-xl">
          <h1>Войдите, чтобы продолжить</h1>
          <div className={styles.inputContainer}>
            <div className={styles.inputContent}>
              <input
                type="number"
                className={styles.input}
                placeholder="IdInstance"
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputContent}>
              <input
                type="text"
                className={styles.input}
                placeholder="ApiTokenInstance"
                onChange={(e) => setApi(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={() => submitHandler(id, api)}
            className="bg-green-800/40 hover:bg-green-400/40 active:bg-green-800/90 p-2 rounded-md mt-4 min-w-[90px]"
          >
            Войти
          </button>
        </div>
      </div>
      {modal && (
        <Modal title="Не удалось авторизоваться" close={() => setModal(false)}>
          Проверьте правильность ввода IdInstance и ApiTokenInstance
          <a
            href="https://console.green-api.com/"
            className="mt-5 font-bold text-gray-700 hover:text-gray-500"
            target="blank"
            onClick={() => setModal(false)}
          >
            Более подробная информация
          </a>
        </Modal>
      )}
    </div>
  );
};

export default LoginScreen;
