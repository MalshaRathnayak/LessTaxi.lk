import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service worker registration for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

// Register service worker for offline capabilities
serviceWorkerRegistration.register();

// Optional: Measuring performance in the app
reportWebVitals(); // Ensure this is imported from './reportWebVitals'
