import SegmentsPage from '../../../../pages/SegmentsPage/ui/SegmentsPage';
import { ProfilePage } from '../../../../pages/ProfilePage';
import { NotFoundPage } from '../../../../pages/NotFoundPage/NotFoundPage';
import {
    AppRoutes,
    getRouteLogsHistory,
    getRouteMain,
    getRouteProfile,
} from '../../../../shared/const/router';
import { AppRoutesProps } from '../../../../shared/types/router';
import LogsHistoryPage from '../../../../pages/LogsHistoryPage/LogsHistoryPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <SegmentsPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.LOGS_HISTORY]: {
        path: getRouteLogsHistory(),
        element: <LogsHistoryPage />,
        authOnly: true,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};