import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import LandingButton from '../Button/LandingButton';
import styles from './UserForm.css';

export default function UserForm({
  className = '',
  label,
  onSubmit,
  isSigningUp,
}) {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formState;

    try {
      if (!username || password.length < 8)
        throw new Error(
          'An username and password (with 8+ characters) are required.'
        );
      setLoading(true);
      await onSubmit({ username, password });
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <fieldset className={styles.form}>
        <section className={styles.formSection}>
          <label htmlFor="username">Username </label>
          <input
            id="username"
            type="username"
            name="username"
            value={formState.username}
            className={styles.input}
            onChange={handleFormChange}
          />
        </section>
        <section className={styles.formSection}>
          <label htmlFor="password">Password </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            className={styles.input}
            onChange={handleFormChange}
          />
        </section>
        <LandingButton
          buttonText={loading ? 'Authenticating...' : label}
          isDisabled={loading}
        />
        {formError && <p>{formError}</p>}
      </fieldset>
    </form>
  );
}
