import { Theme, useTheme } from 'app/providers/ThemeProvider';
import style from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import LigthIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo } from 'react';


interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const {theme, toggleTheme } = useTheme();
  return (
  <Button className={classNames(style.ThemeSwitcher, {}, [className])} onClick={toggleTheme} theme={ThemeButton.CLEAR} >
   {theme === Theme.LIGHT? <LigthIcon/> : <DarkIcon/>}
    </Button>)
});
