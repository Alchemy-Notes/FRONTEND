import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import styles from './App.css';
import { ThemeProvider } from './context/ThemeContext';

render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
          <App className={styles.App} />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
