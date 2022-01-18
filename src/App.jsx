import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Auth from './views/Auth/Auth';
import Dashboard from './views/Dashboard/Dashboard';
// need to delete dashboard??
import Notes from './views/Notes/Notes';
import styles from './App.css';
import Hamburger from './components/Hamburger/Hamburger';
import { useState } from 'react';
import Button from './components/Button/Button';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState('false');

  const toggleMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <Router>
      <main className={isDarkMode ? styles.dark : styles.light}>
        <Hamburger />
        <Button
          isDarkMode={isDarkMode}
          buttonText={isDarkMode ? 'Light Mode' : 'Dark Mode'}
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

          {/* Private Routes Below */}
          <Route path="/notes">
            <Notes />
            {/* Search and ListView */}
          </Route>

          <Route path="/notes/new">
            <Notes />
            {/* empty note form */}
          </Route>

          <Route path="/notes/edit">
            <Notes isEditing />
            {/* note form with values from backend */}
          </Route>

          {/* may need more routes? */}
        </Switch>
      </main>
    </Router>
  );
}
