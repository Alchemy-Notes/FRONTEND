import { Link, useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleSubmit = () => {}; //TODO: write handleSubmit function

  return (
    <section className={styles.authForm}>
      <h2>{isSigningUp ? 'Welcome' : 'Welcome back!'}</h2>
      <br />
      Sign in with Github
      {/* TODO: Github oauth */}
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
