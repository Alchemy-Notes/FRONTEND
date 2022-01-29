import React from 'react';
import styles from '../../App.css';
import { useTheme } from '../../context/ThemeContext';

// I love you made custom components here for your buttons
// It seems the main difference in these 3 buttons is the className being applied.
// A function and a `variant` prop would be good to distinguish what to display

// would usually have this utils/enums.js
const BUTTONS = {
  DEFAULT_BUTTON: 'defaultButton',
  HEADER_BUTTON: 'headerButton',
  LANDING_BUTTON: 'landingButton'
}

function getButtonStyle(variant = BUTTONS.DEFAULT_BUTTON, theme) {
  const {HEADER_BUTTON, LANDING_BUTTON} = BUTTONS
  if (variant === HEADER_BUTTON) {
    return theme ? styles.darkButtonHeader : styles.lightButtonHeader
  } else if (variant === LANDING_BUTTON) {
    return theme ? styles.darkButtonLanding : styles.lightButtonHeader
  }
  else {
    return theme ? styles.darkButton : styles.lightButton
  }
}

export default function Button({
  handleClick,
  buttonText,
  type = text,
  isDisabled = false,
  variant // variant would be passed as a prop with one of the values from our `BUTTONS` enum on line 10
}) {
  const { theme } = useTheme();
  const displayStyle = getButtonStyle(variant, theme)
  return (
    <button
      onClick={handleClick}
      type={type}
      className={displayStyle}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
}