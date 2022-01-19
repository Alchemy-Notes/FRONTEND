import React from 'react';
import styles from '../../App.css';
import Hamburger from '../Hamburger/Hamburger';
import Button from '../Button/Button';
import { useTheme } from '../../context/ThemeContext';
import notedlogo from '../../../public/assets/notedlogo.png';

function Header() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <>
      <header className={theme ? styles.darkHeader : styles.lightHeader}>
        <Hamburger />
        <img src={notedlogo} className={styles.logo} />
        <Button
          buttonText={theme ? 'Light Mode' : 'Dark Mode'}
          handleClick={toggleMode}
          className={styles.modeButton}
        />
      </header>
    </>
  );
}

export default Header;
