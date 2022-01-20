import React from 'react';
import styles from '../../App.css';
import { useTheme } from '../../context/ThemeContext';

export default function HeaderButton({
  handleClick,
  buttonText,
  isDisabled = false,
}) {
  const { theme } = useTheme();
  return (
    <button
      onClick={handleClick}
      className={theme ? styles.darkButtonHeader : styles.lightButtonHeader}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
}
