import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Auth from './views/Auth/Auth';
import Notes from './views/Notes/Notes';
import styles from './App.css';
import Hamburger from './components/Hamburger/Hamburger';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <Router>
      <main className={styles.container}>
        <Hamburger />
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
            <Notes />
            {/* Search and ListView */}
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
