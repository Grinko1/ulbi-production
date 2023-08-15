import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const {t} = useTranslation('main')
    return (
        <div>
            {t('Главная страница')}
            {t('new translate')}
        </div>
    );
};

export default MainPage;