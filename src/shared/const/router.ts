export enum AppRoutes {
    MAIN = 'auditors',
    PROFILE = 'profile',
    USERS = 'users',
    LOGS_HISTORY = 'history',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteUsers = () => '/users';
export const getRouteHistory = () => '/history';
