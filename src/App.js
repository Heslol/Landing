import React, { useState } from 'react';
import { Layout } from './Components/Layout/Layout';
import './scss/App.scss';
import { Navigation } from './Fcomponents/Navigation/Navigation';
import { FirstPage } from './Pages/FirstPage/FirstPage';

function App() {

  const [isAuth, setIsAuth] = useState(true);

  const onClickLogOut = () => {
    setIsAuth((prevState) => !prevState)
  };

  const onClickLogIn = () => {
    setIsAuth((prevState) => !prevState)
  }

  const [hover, setHover] = useState(false) ;

  const onClickHover = () => {
    setHover((prevState) => !prevState)
  };

  return (
    <>
      <Layout isAuth={isAuth} onClickLogOut={onClickLogOut} onClickHover={onClickHover}/>
      {!isAuth ?
      (<FirstPage hover={hover} onClickLogIn={onClickLogIn}/>) :
      (<Navigation />)
    }
    </>
  );
}

export default App;
