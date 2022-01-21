import React from 'react';
import styles from '../../App.css';
import Hamburger from '../Hamburger/Hamburger';
import { useTheme } from '../../context/ThemeContext';
import notedlogo from '../../../public/assets/notedlogo.png';
import creamlogo from '../../../public/assets/logocream.png';
import HeaderButton from '../Button/HeaderButtons';

function Header() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme((prevState) => !prevState);
  };

  const btnStyle = {
    height: 10,
  };

  return (
    <>
      <header className={theme ? styles.darkHeader : styles.lightHeader}>
        <Hamburger theme={theme} />
        <img src={theme ? creamlogo : notedlogo} className={styles.logo} />
        <HeaderButton
          buttonText={theme ? 'Light Mode' : 'Dark Mode'}
          handleClick={toggleMode}
          style={btnStyle}
        />
      </header>
    </>
  );
}

export default Header;
