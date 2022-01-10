import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* Dashboard */}
          {/* Conditionally render */}
          {/* if not signed in, welcome! links to sign in/signup */}
          {/* if signed in shows all your dashboard */}
        </Route>

        <Route path="/login">
          {/* Auth */}
          {/* redirect to dashboard */}
        </Route>

        <Route path="/register">
          {/* Auth */}
          {/* redirect to dashboard */}
        </Route>

        <Route path="/about">{/* AboutUs */}</Route>

        {/* Private Routes Below */}
        <Route path="/notes">
          {/* Notes container, view, edit, etc based on state */}
        </Route>

        {/* may need more routes? */}
      </Switch>
    </Router>
  );
}
