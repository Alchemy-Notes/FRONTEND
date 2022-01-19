import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Auth from './views/Auth/Auth';
import Notes from './views/Notes/Notes';
import styles from './App.css';
import Hamburger from './components/Hamburger/Hamburger';
import { useState } from 'react';
import Button from './components/Button/Button';
import { useTheme } from './context/ThemeContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoteList from './components/Notes/NoteList/NoteList';

export default function App() {
  // const [isDarkMode, setIsDarkMode] = useState('false');
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <Router>
      <main className={theme ? styles.dark : styles.light}>
        <Hamburger />
        <Button
          buttonText={theme ? 'Light Mode' : 'Dark Mode'}
          handleClick={toggleMode}
        />
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>

          <Route path="/login">
            <Auth />
          </Route>

          <Route path="/register">
            <Auth isSigningUp />
          </Route>

          <Route path="/about">
            <AboutUs />
          </Route>

          <PrivateRoute path="/notes">
            <Notes>
              <NoteList />
            </Notes>
          </PrivateRoute>

          <PrivateRoute path="/notes/new">
            <Notes />
            {/* empty note form */}
          </PrivateRoute>

          <PrivateRoute path="/notes/edit">
            <Notes isEditing />
            {/* note form with values from backend */}
          </PrivateRoute>

          {/* may need more routes? */}
        </Switch>
      </main>
    </Router>
  );
}
