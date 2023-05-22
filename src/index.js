import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode>
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
  //   </React.StrictMode>
);
