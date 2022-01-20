import { Link, useHistory } from 'react-router-dom';
import GithubLogin from '../../components/GithubLogin/GithubLogin';
import UserForm from '../../components/UserForm/UserForm';
import { useUser } from '../../context/UserContext';
import { codeExchange, signinUser, signupUser } from '../../services/auth';
import { useEffect, useState } from 'react';
import styles from './Auth.css';
import notedlogo from '../../../public/assets/notedlogo.png';
import computer from '../../../public/assets/NotedBGimgSmall.jpg';
import { useTheme } from '../../context/ThemeContext';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { theme, setTheme } = useTheme();
  const { setUser } = useUser();
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const code = params.get('code');
    if (code) {
      try {
        codeExchange(code).then((res) => setUser(res.name));
        console.log(res);
        history.push('/notes');
      } catch (error) {
        setError(error.message);
      }
    }
  }, []);

  const handleSubmit = async (formState) => {
    try {
      if (isSigningUp) {
        const user = await signupUser(formState);
        setUser(user);
        history.push('/notes');
      } else {
        const user = await signinUser(formState);
        setUser(user);
        history.push('/notes');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={theme ? styles.bgImgDark : styles.bgImgLight}>
      <section className={styles.container}>
        {/* <img src={notedlogo} className={styles.logo} /> */}
        <h2 className={styles.welcome}>
          {isSigningUp ? 'Welcome.' : 'Welcome back!'}
        </h2>
        <br />

        <GithubLogin
          label={isSigningUp ? 'Sign up with GitHub' : 'Sign in with GitHub'}
          setUser={setUser}
          className={styles.githubButton}
        />
        {error ? <p>{error}</p> : <></>}

        <UserForm
          isSigningUp={isSigningUp}
          onSubmit={handleSubmit}
          label={isSigningUp ? 'Sign Up' : 'Log In'}
          className={styles.userForm}
        />
        {isSigningUp ? (
          <p className={styles.swapLogin}>
            Already a user? <Link to="/login">Log In</Link>
          </p>
        ) : (
          <p className={styles.swapLogin}>
            Not a user? <Link to="/register">Sign Up</Link>
          </p>
        )}
      </section>
    </div>
  );
}
