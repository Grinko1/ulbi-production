import { RouteProps } from "react-router-dom"
import { MainPage } from 'pages/MainPage';
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFound";
import { ProfileAsyncPage } from "pages/ProfilePage/ui/ProfilePage.async";
import { ProfilePage } from "pages/ProfilePage";

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  PROFILE = 'profile'
}

export const RoutePath : Record<AppRoutes, string> = {
    [AppRoutes.MAIN]:'/',
    [AppRoutes.ABOUT]:'/about',
    [AppRoutes.NOT_FOUND]:'*',
    [AppRoutes.PROFILE] :'/profile'
}

export const routeConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]:{
        path:RoutePath.main,
        element:<MainPage/>
    },
    [AppRoutes.ABOUT]:{
        path:RoutePath.about,
        element:<AboutPage/>
    },
    [AppRoutes.NOT_FOUND]:{
        path:RoutePath.not_found,
        element:<NotFoundPage/>
    },
    [AppRoutes.PROFILE]:{
        path:RoutePath.profile,
        element:<ProfilePage/>
    }
}