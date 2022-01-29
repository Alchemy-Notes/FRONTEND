import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Auth from './views/Auth/Auth';
import Notes from './views/Notes/Notes';
import styles from './App.css';
import { useTheme } from './context/ThemeContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoteList from './components/Notes/NoteList/NoteList';
import Header from './components/Header/Header';
import ViewNote from './components/Notes/ViewNote/ViewNote';
import EditNote from './components/Notes/EditNote/EditNote';
import Home from './views/Home/Home';

export default function App() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <Router>
      <main className={theme ? styles.dark : styles.light}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
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

          {/* duplicate route deleted */}
          <PrivateRoute exact path="/notes">
            <Notes>
              <NoteList />
            </Notes>
          </PrivateRoute>

          <PrivateRoute exact path="/notes/new">
            <Notes>
              <EditNote />
            </Notes>
          </PrivateRoute>

          <PrivateRoute exact path="/notes/:noteId">
            <Notes>
              <ViewNote />
            </Notes>
          </PrivateRoute>

          <PrivateRoute exact path="/notes/edit/:noteId">
            <Notes>
              <EditNote isEditing />
            </Notes>
          </PrivateRoute>

        </Switch>
      </main>
    </Router>
  );
}