import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Children, FC, ReactNode, memo } from 'react';
import style from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps {
  className?: string;
  to: string;
  theme?: AppLinkTheme;
  children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { className, children, to, theme = AppLinkTheme.PRIMARY, ...other } = props;
  return (
    <Link to={to} className={classNames(style.AppLink, {}, [className, style[theme]])} {...other}>
      {children}
    </Link>
  );
});
