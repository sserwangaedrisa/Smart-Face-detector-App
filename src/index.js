import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'tachyons';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactHelmet from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <title>My Website</title>
    <App />
  </React.StrictMode>
);

reportWebVitals();
