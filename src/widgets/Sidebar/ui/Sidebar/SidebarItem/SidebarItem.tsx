import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import style from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/sidebarItem';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemProps {
item:SidebarItemType;
collapsed:boolean
}

export const SidebarItem = memo(({item, collapsed}: SidebarItemProps) => {
    const {t} = useTranslation()
  return (
       <AppLink theme={AppLinkTheme.SECONDARY} to={item.path} className={classNames(style.item, {[style.collapsed]:collapsed},[]) }>
          <item.Icon className={style.icon} />
          <span className={style.link}>{t(item.text)}</span>
        </AppLink>
  );
});