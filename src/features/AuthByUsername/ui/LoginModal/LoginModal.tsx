import { Modal } from 'shared/ui/Modal';
import style from './LoginModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
// import { LoginForm } from '../LoginForm/LoginForm';
import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string;
    isOpen:boolean;
    onClose:()=>void
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props
  return (
    <Modal className={classNames(style.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
        {/* <LoginForm/> */}
        <Suspense fallback={<Loader/>}>
        <LoginFormAsync/>
        </Suspense>
    </Modal>
  );
};