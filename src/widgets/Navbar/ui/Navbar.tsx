import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {

  const {t} =useTranslation('main')
  return (
    <div className={classNames(style.navbar, {}, [className])}>
   
      <div className={style.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={style.mainLink}>{t('Главная')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='about'>{t('О нас')}</AppLink>
      </div>
    </div>
  );
};
