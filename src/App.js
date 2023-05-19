import React from 'react';

import MainLayout from './layouts/MainLayout/MainLayout.jsx';
import LoginScreen from './screens/LoginScreen.jsx';

function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [auth, setAuth] = React.useState(null);
  const [data, setData] = React.useState('');
  const getData = (id, api) => {
    return id, api;
  };

  React.useEffect(() => {
    if (!data) {
      setAuth(false);
    }
    setIsAuth(localStorage.getItem('auth'));
    setData(localStorage.getItem('authData'));
    if (auth === 'true' && data) {
      setIsAuth(true);
    }
    if (isAuth && !auth) {
      setAuth(localStorage.setItem('auth', isAuth));
      setData(localStorage.getItem('authData'));
    }
  }, [isAuth, auth]);

  return isAuth ? <MainLayout /> : <LoginScreen authHandler={setIsAuth} />;
}

export default App;
