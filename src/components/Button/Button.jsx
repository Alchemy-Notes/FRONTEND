import React from 'react';
import styles from '../../App.css';
import { useTheme } from '../../context/ThemeContext';

export default function Button({
  handleClick,
  buttonText,
  type,
  isDisabled = false,
}) {
  const { theme } = useTheme();
  return (
    <button
      onClick={handleClick}
      type={type}
      className={theme ? styles.darkButton : styles.lightButton}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
}
