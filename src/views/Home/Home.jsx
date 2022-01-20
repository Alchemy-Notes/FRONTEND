import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Home.css';
import GithubLogin from '../../components/GithubLogin/GithubLogin';
import { useUser } from '../../context/UserContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { setUser } = useUser();
  const [error, setError] = useState(null);

  return (
    <div className={theme ? styles.bgImgDark : styles.bgImgLight}>
      <section className={styles.container}>
        {/* <img src={notedlogo} className={styles.logo} /> */}
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
      </section>
    </div>
  );
}
