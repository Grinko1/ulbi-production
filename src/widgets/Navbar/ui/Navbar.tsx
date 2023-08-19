import style from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation();

  const onToggleModal = useCallback( () =>{
    setIsAuthModal(prev => !prev)
  },[])
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <Button className={style.links} onClick={onToggleModal} theme={ThemeButton.CLEAR_INVERTED}>{t('Войти')}</Button>

      <Modal isOpen={isAuthModal  } onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quis ipsum iste natus
        earum placeat tenetur, nam, numquam accusamus odio aspernatur itaque dignissimos labore.
        Totam libero cum excepturi. Labore eum delectus quis possimus porro tempore? Tenetur
        voluptatibus eum obcaecati consectetur impedit voluptates aperiam. Sed magnam, aspernatur ab
        nobis pariatur quos.
      </Modal>
    </div>
  );
};
