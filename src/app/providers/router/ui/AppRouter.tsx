import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => {
    return (
        <div className="content">
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </div>
    );
};

export default AppRouter;
