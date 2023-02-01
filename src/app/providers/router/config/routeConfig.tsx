import AuditorsPage from '../../../../pages/AuditorsPage/ui/AuditorsPage';
import { ProfilePage } from '../../../../pages/ProfilePage';
import { NotFoundPage } from '../../../../pages/NotFoundPage/NotFoundPage';
import {
    AppRoutes,
    getRouteHistory,
    getRouteMain,
    getRouteProfile,
    getRouteUsers,
} from '../../../../shared/const/router';
import { AppRoutesProps } from '../../../../shared/types/router';
import HistoryPage from '../../../../pages/HistoryPage/HistoryPage';
import { UsersPage } from '../../../../pages/UsersPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <AuditorsPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.USERS]: {
        path: getRouteUsers(),
        element: <UsersPage />,
        authOnly: true,
    },
    [AppRoutes.LOGS_HISTORY]: {
        path: getRouteHistory(),
        element: <HistoryPage />,
        authOnly: true,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
