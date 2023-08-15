import { useTranslation } from 'react-i18next';
import style from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames(style.LangSwitcher, {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}>
      {t('Язык')}
    </Button>
  );
};
