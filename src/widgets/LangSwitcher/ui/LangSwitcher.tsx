import { useTranslation } from 'react-i18next';
import style from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?:boolean
}

export const LangSwitcher = ({ className , short=false}: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames(style.LangSwitcher, {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}>
      {t( short ? 'Сокращен язык' : 'Язык')}
    </Button>
  );
};
