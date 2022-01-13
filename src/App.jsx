import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Auth from './views/Auth/Auth';
import Dashboard from './views/Dashboard/Dashboard';
import Notes from './views/Notes/Notes';
import styles from './App.css';

export default function App() {
  return (
    <Router>
      <main className={styles.container}>
        <Switch>
          <Route exact path="/">
            <Dashboard />
            {/* Conditionally render */}
            {/* if not signed in, welcome! links to sign in/signup */}
            {/* if signed in shows all your dashboard */}
          </Route>

          <Route path="/login">
            <Auth />
            {/* redirect to dashboard */}
          </Route>

          <Route path="/register">
            <Auth isSigningUp />
            {/* redirect to dashboard */}
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
        {/* <img src={logo} className={styles.bgImg} /> */}
      </main>
    </Router>
  );
}
