import { useTranslation } from 'react-i18next';
import style from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface LangSwitcherProps {
  className?: string;
  short?:boolean
}

export const LangSwitcher = memo(({ className , short=false}: LangSwitcherProps) => {
  /* i18next-extract-disable-line */
  const { t, i18n} = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  // const toggle = () =>{}
  return (
    <Button
      className={classNames(style.LangSwitcher, {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}>
      {t( short ? 'Сокращен язык' : 'Язык')}
    </Button>
  );
});
