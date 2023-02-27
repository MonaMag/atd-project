import React from 'react';
import './styles/index.css';
import 'antd/dist/reset.css';
import { Sidebar } from 'widgets/Sidebar';
import AppRouter from './providers/router/ui/AppRouter';

function App() {
  //const authData = useAppSelector(getUserAuthData);
  //const inited = useAppSelector(getUserInited);
  // const inited = true;

  return (
    <div className="app">
      {/*   {!inited ? (
        <LoginPage />
      ) : (
        <>
          <Sidebar />
          <AppRouter />
        </>
      )}*/}
      <Sidebar />
      <AppRouter />
    </div>
  );
}

export default App;
