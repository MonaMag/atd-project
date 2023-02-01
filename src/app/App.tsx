import React from 'react';
import AppRouter from './providers/router/ui/AppRouter';
import './styles/index.css';
import 'antd/dist/reset.css';
import { Sidebar } from 'widgets/Sidebar';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <AppRouter />
        </div>
    );
}

export default App;
