import { ButtonHTMLAttributes, FC } from 'react';
import style from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';


export enum ThemeButton {
    CLEAR='clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?:ThemeButton
}

export const Button:FC<ButtonProps> = ({ className, children, theme, ...other }) => {
  return (
    <button className={classNames(style.Button, {}, [className, style[theme]])} {...other}>
        {children}
    </button>
  );
};