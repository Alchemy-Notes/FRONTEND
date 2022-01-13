import { Link, useHistory } from 'react-router-dom';
import GithubLogin from '../../components/GithubLogin/GithubLogin';
import UserForm from '../../components/UserForm/UserForm';
import { useUser } from '../../context/UserContext';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();
  const url = new URL(window.location.href);
  const params = url.searchParams;
  const code = params.get('code');
  console.log(code);
  if (code) {
    try {
      //post route to backend with code in the body
      //bind result of that to a variable and pass that to setUser
    } catch (error) {
      //set the error message in state, ofc
    }
  }

  const handleSubmit = () => {}; //TODO: write handleSubmit function

  return (
    <section
    // className={styles.authForm}
    >
      <h2>{isSigningUp ? 'Welcome' : 'Welcome back!'}</h2>
      <br />

      <GithubLogin
        label={isSigningUp ? 'Sign up with GitHub' : 'Sign in with GitHub'}
        setUser={setUser}
      />

      <UserForm
        onSubmit={handleSubmit}
        label={isSigningUp ? 'Sign Up' : 'Log In'}
      />
      {isSigningUp ? (
        <p>
          Already a user? <Link to="/login">Log In</Link>
        </p>
      ) : (
        <p>
          Not a user? <Link to="/register">Sign Up</Link>
        </p>
      )}
    </section>
  );
}
