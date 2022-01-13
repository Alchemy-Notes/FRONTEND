import { Link, useHistory } from 'react-router-dom';
import GithubLogin from '../../components/GithubLogin/GithubLogin';
import UserForm from '../../components/UserForm/UserForm';
import { useUser } from '../../context/UserContext';
import { codeExchange } from '../../services/auth';
import { useEffect, useState } from 'react';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const code = params.get('code');
    if (code) {
      try {
        codeExchange(code).then((res) => setUser(res.name));
        history.push('/notes');
      } catch (error) {
        setError(error.message);
      }
    }
  }, []);

  // pull staging?

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
      {error ? <p>{error}</p> : <></>}

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
