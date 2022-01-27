import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Home.css';
import GithubLogin from '../../components/GithubLogin/GithubLogin';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { signinUser } from '../../services/auth';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { setUser } = useUser();
  const [error, setError] = useState(null);
  const history = useHistory();

  return (
    <div className={theme ? styles.bgImgDark : styles.bgImgLight}>
      <section className={styles.container}>
        <h2 className={styles.welcome}>Welcome.</h2>
        <br />
        <article className={styles.copy}>
          Welcome to Note(d), a note tacking app designed by devs for devs.
        </article>
        <GithubLogin
          label="Sign in with GitHub"
          setUser={setUser}
          className={styles.githubButton}
        />
        {error ? <p>{error}</p> : <></>}
        <Link to="/login">Log In</Link> or <Link to="/register">Sign Up</Link>{' '}
        without github.
        <Button
          handleClick={async () => {
            const user = await signinUser({
              username: 'helloWorld',
              password: 'password',
            });
            setUser(user);
            history.push('/notes');
          }}
          buttonText="Sign in as Demo User"
        ></Button>
      </section>
    </div>
  );
}
