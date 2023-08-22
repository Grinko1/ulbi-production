import { useTranslation } from 'react-i18next';
import style from './ProfilePage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';


const reducers:ReducersList = {
  profile:profileReducer
}
interface ProfilePageProps {
    className?: string;
}

 const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const {t} = useTranslation()
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
    <div className={classNames(style.ProfilePage, {}, [className])}>
        {t('Страница профиля')}
    </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage