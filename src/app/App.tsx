import React from 'react';
import AppRouter from './providers/router/ui/AppRouter';
import './styles/index.css';
import { Sidebar } from 'widgets/Sidebar';

function App() {
    return (
        <div className="app">
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
