import AuditorsPage from '../../../../pages/AuditorsPage/ui/AuditorsPage';
import { ProfilePage } from '../../../../pages/ProfilePage';
import { NotFoundPage } from '../../../../pages/NotFoundPage/NotFoundPage';
import {
  AppRoutes,
  getRouteAuditors,
  getRouteForbidden,
  getRouteHistory,
  getRouteProfile,
  getRouteUsers,
} from '../../../../shared/const/router';
import { AppRoutesProps } from '../../../../shared/types/router';
import HistoryPage from '../../../../pages/HistoryPage/HistoryPage';
import { UsersPage } from '../../../../pages/UsersPage';
import { UserRole } from '../../../../entities/User';
import ForbiddenPage from '../../../../pages/ForbiddenPage/ForbiddenPage';
import { Navigate } from 'react-router-dom';
import React from 'react';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.LOGIN]: {
    path: '/login',
    element: <Navigate to="/users" replace />,
    roles: [UserRole.ADMIN],
  },
  [AppRoutes.LOGIN]: {
    path: '/login',
    element: <Navigate to="/auditors" replace />,
    roles: [UserRole.PRESALE, UserRole.USER],
  },
  [AppRoutes.AUDITORS]: {
    path: getRouteAuditors(),
    element: <AuditorsPage />,
    authOnly: true,
    roles: [UserRole.PRESALE, UserRole.USER],
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(),
    element: <ProfilePage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.PRESALE, UserRole.USER],
  },
  [AppRoutes.USERS]: {
    path: getRouteUsers(),
    element: <UsersPage />,
    authOnly: true,
    roles: [UserRole.ADMIN],
  },
  [AppRoutes.LOGS_HISTORY]: {
    path: getRouteHistory(),
    element: <HistoryPage />,
    authOnly: true,
    roles: [UserRole.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
    roles: [UserRole.ADMIN, UserRole.PRESALE, UserRole.USER],
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
    roles: [UserRole.ADMIN, UserRole.PRESALE, UserRole.USER],
  },
};
