export enum AppRoutes {
    MAIN = 'auditor_segments',
    PROFILE = 'profile',
    USERS = 'users',
    LOGS_HISTORY = 'history',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteProfile = () => '/profile';
export const getRouteUsers = () => '/users';
export const getRouteLogsHistory = () => '/history';
