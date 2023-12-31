import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/fulllist.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
    path:string;
    text:string;
    Icon:React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList:SidebarItemType[] =[
    {
        path:RoutePath.main,
        Icon:MainIcon,
        text: 'Главная'
    },
     {
        path:RoutePath.about,
        Icon:AboutIcon,
        text: 'О нас'
    },
     {
        path:RoutePath.profile,
        Icon:ProfileIcon,
        text: 'Профиль'
    },
]