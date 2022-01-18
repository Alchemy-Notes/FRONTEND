import React from 'react';
import styles from '../../App.css';

export default function Button({
  handleClick,
  isDarkMode,
  buttonText,
  isDisabled = false,
}) {
  return (
    <button
      onClick={() => handleClick()}
      className={isDarkMode ? styles.darkButton : styles.lightButton}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
}
