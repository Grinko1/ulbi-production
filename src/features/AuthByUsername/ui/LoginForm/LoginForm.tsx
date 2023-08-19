import { useTranslation } from 'react-i18next';
import style from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const {t} = useTranslation()
  return (
    <div className={classNames(style.LoginForm, {}, [className])}>
        <Input type="text" className={style.input} placeholder={t('Введите логин ')} autofocus={true}/>
        <Input type="text" className={style.input}  placeholder={t('Введите пароль ')}/>
        <Button className={style.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};