import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new `react-dom/client` import
import { BrowserRouter} from 'react-router-dom';
import App from './App';

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
