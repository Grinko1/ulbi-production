import style from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation();

  const onCloseModal = useCallback( () =>{
    setIsAuthModal(false)
  },[])
    const onOpenModal = useCallback( () =>{
    setIsAuthModal(true)
  },[])
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <Button className={style.links} onClick={onOpenModal} theme={ThemeButton.CLEAR_INVERTED}>{t('Войти')}</Button>

      <LoginModal isOpen={isAuthModal } onClose={onCloseModal}/>
    </div>
  );
};
