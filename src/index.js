import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'tachyons';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.title = 'Face Detector';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
