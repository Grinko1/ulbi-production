import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
   
      <div className={style.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={style.mainLink}>Home</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='about'>About</AppLink>
      </div>
    </div>
  );
};
