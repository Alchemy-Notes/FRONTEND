import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';

render(
  // <React.StrictMode>
  <UserProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </UserProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
