import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { MainAsyncPage } from './pages/Main/index.async';
import { AboutAsyncPage } from './pages/About/index.async';
import { Suspense, useContext, useState } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const {theme, toggleTheme} = useTheme() 
  return (
    <div className={classNames('app',{}, [theme])}>
      <button onClick={toggleTheme}>toggleTheme</button>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainAsyncPage />} />
          <Route path={'about'} element={<AboutAsyncPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
