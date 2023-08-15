import { useState } from 'react';
import style from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <div className={classNames(style.Sidebar, {[style.collapsed]: collapsed}, [className])}>
      
      <button onClick={onToggle}>toggle</button>
      <div className={style.switchers}>
           <ThemeSwitcher/>
           <LangSwitcher className={style.lang}/>
      </div>
    </div>
  );
};