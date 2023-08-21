import { lazy } from 'react';

// export const AboutAsyncPage = lazy(() => import('./AboutPage'))
// import { FC, lazy } from 'react';


export const AboutAsyncPage = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
