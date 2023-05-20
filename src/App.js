import React from 'react';

import MainLayout from './layouts/MainLayout/MainLayout.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import { getData } from './api/service.js';

function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [auth, setAuth] = React.useState(null);
  const [data, setData] = React.useState(localStorage.getItem('authData'));

  React.useEffect(() => {
    setData(localStorage.getItem('authData'));
    data ? setIsAuth(true) : setIsAuth(false);
    if (isAuth && !auth) {
      setAuth(localStorage.setItem('auth', isAuth));
    }
    if (!data) {
      setIsAuth(false);
    }
    if (isAuth && !auth) {
      setAuth(localStorage.setItem('auth', isAuth));
    }
    if (data && auth) {
      setIsAuth(true);
      getData(data);
    }
  }, [isAuth, auth]);

  return isAuth ? (
    <MainLayout checkAuth={setIsAuth} />
  ) : (
    <LoginScreen authHandler={setIsAuth} setData={setData} />
  );
}

export default App;
