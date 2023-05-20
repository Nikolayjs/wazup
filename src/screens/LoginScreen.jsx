import React from 'react';
import { getAuth, getData } from '../api/service';
import Modal from '../components/UI/Modal/Modal';
import styles from './LoginScreen.module.css';
const LoginScreen = ({ authHandler, setData }) => {
  const [id, setId] = React.useState('');
  const [api, setApi] = React.useState('');
  const [modal, setModal] = React.useState(false);
  const [authData, setAuthData] = React.useState({});
  async function submitHandler(id, api) {
    if (!id || !api) return;
    const response = await getAuth(id, api);
    if (!response) {
      setModal(true);
      return;
    }
    if (!authData) {
      setModal(true);
    } else if (response.stateInstance) {
      authHandler(true);
      setAuthData({ id: id, api: api });
      const authData = localStorage.setItem('authData', JSON.stringify({ id: id, api: api }));
      setData(authData);
      getData(authData);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <h1>Войдите, чтобы продолжить</h1>
          <div className={styles.inputContainer}>
            <div className={styles.inputContent}>
              <input
                type="text"
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
          <button onClick={() => submitHandler(id, api)} className={styles.btn}>
            Войти
          </button>
          <div className="mt-20">
            <h3>
              Приложение использует{' '}
              <a
                className="text-green-600 cursor-pointer hover:border-b-2 hover:border-green-600"
                href="https://green-api.com/"
                target="blank"
              >
                Green API
              </a>
            </h3>
          </div>
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
