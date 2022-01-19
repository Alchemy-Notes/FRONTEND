import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { NoteProvider } from './context/NoteContext';

render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <NoteProvider>
          <App />
        </NoteProvider>
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
