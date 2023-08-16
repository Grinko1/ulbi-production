import { ButtonHTMLAttributes, FC } from 'react';
import style from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, square, size = SizeButton.M, ...other } = props;
  const mods = {
    [style.square]: square,
    [style[size]]: true,
  };

  return (
    <button className={classNames(style.Button, mods, [className, style[theme]])} {...other}>
      {children}
    </button>
  );
};
