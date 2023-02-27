import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import LoginPage from '../../../../pages/LoginPage/LoginPage';

const AppRouter = () => {
  //const inited = useAppSelector(getUserInited);
  const inited = false;
  // const inited = true;

  return (
    <Routes>
      {inited ? (
        <>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
          ))}
        </>
      ) : (
        <>
          <Route path={'*'} element={<Navigate to="/login" replace />} />
          <Route path={'/login'} element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
