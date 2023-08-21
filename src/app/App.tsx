import { useTheme } from './providers/ThemeProvider/index';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { userActions } from 'entities/User';

const App = () => {

  const { theme } = useTheme();
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(userActions.initAuthData())
  },[])
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
  
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
