import React from 'react';
import { Link } from 'react-router-dom';
import AppRouter from "./providers/router/AppRouter";
import './styles/index.css';
import {Sidebar} from "../widgets/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
        <Link to={'/'}>Главная страница</Link>
        <Link to={'/users'}>Страница пользователя</Link>
        <Link to={'/profile'}>Профиль пользователя</Link>
        <div className="content-page">
            <Sidebar />
            <AppRouter />
        </div>
    </div>
  );
}

export default App;
