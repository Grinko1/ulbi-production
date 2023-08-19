import { Modal } from 'shared/ui/Modal';
import style from './LoginModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen:boolean;
    onClose:()=>void
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props
  return (
    <Modal className={classNames(style.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
        <LoginForm/>
    </Modal>
  );
};