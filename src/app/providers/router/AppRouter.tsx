import {Route, Routes} from "react-router-dom";
import UsersPage from "../../../pages/UsersPage/ui/UsersPage";
import ProfilePage from "../../../pages/ProfilePage/ui/ProfilePage";
import MainPage from "../../../pages/MainPage/ui/MainPage";
import React from "react";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/users'} element={<UsersPage/>}/>
            <Route path={'/profile'} element={<ProfilePage/>}/>
            <Route path={'/'} element={<MainPage/>}/>
        </Routes>
    );
};

export default AppRouter;
