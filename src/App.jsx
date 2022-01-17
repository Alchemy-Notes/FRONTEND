import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Auth from './views/Auth/Auth';
import Dashboard from './views/Dashboard/Dashboard';
// need to delete dashboard??
import Notes from './views/Notes/Notes';
import styles from './App.css';
import Hamburger from './components/Hamburger/Hamburger';
import { useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  useEffect(() => {
    const json = localStorage.getItem('noted-dark-mode');
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem('noted-dark-mode', json);
  }, [darkMode]);

  return (
    <Router>
      <main className={styles.container}>
        <Hamburger />
        <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
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
          </Route>

          {/* may need more routes? */}
        </Switch>
      </main>
    </Router>
  );
}
