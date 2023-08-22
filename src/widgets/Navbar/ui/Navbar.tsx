import style from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthdata, userActions } from 'entities/User';



interface NavbarProps {
  className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const authData = useSelector(getAuthdata);
 
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <div className={classNames(style.navbar, {}, [className])}>
        <Button className={style.links} onClick={onLogout} theme={ThemeButton.CLEAR_INVERTED}>
          {t('Выйти')}
        </Button>
      </div>
    );
  }
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <Button className={style.links} onClick={onOpenModal} theme={ThemeButton.CLEAR_INVERTED}>
        {t('Войти')}
      </Button>
     { isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  );
});
