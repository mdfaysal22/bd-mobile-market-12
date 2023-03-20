import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContext from './Contexts/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthContext>
);


