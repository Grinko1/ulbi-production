import style from './Test.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface TestProps {
    className?: string;
}

export const Test = ({ className }: TestProps) => {
  return (
    <div className={classNames(style.Test, {}, [className])}>
    </div>
  );
};