import { Link, LinkProps } from 'react-router-dom';
import style from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Children, FC } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
} 
interface AppLinkProps extends LinkProps{
    className?: string;
    to:string,
    theme?:AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const { className , children, to,theme = AppLinkTheme.PRIMARY, ...other} = props
  return (
    <Link to={to} className={classNames(style.AppLink, {}, [className, style[theme]])} {...other}>
        {children}
    </Link>
  );
};