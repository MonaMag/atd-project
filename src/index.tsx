import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/providers/store/store';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './app/providers/ErrorBoundary/ErrorBoundary';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Контейнер root не найден. Не удалось вмонтировать реакт приложение');
}
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </BrowserRouter>,
);
