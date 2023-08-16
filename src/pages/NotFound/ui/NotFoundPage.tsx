import { useTranslation } from 'react-i18next';
import style from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const {t} = useTranslation()
  return (
    <div className={classNames(style.NotFoundPage, {}, [className])}>
        {t('Страница не найдена')}
    </div>
  );
};