import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/operations';
// import Paper from '../Paper/Paper';

import styles from './SignIn.module.css';
import GoBackButton from '../GoBackButton/GoBackButton';
import { RiLoginCircleFill } from 'react-icons/ri';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const SignIn = () => {
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleRememberMeChange = e => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className="wrapper">
      <form
        className={styles.signInForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={styles.signInLabel}>
          Email
          <input
            className={styles.signInInput}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </label>
        <label className={styles.signInLabel}>
          Password
          <input
            className={styles.signInInput}
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </label>
        <FormControlLabel
          control={<Checkbox />}
          label={'Keep me logged in'}
          checked={rememberMe}
          onChange={handleRememberMeChange}
        />
        <button className={styles.signInBtn} type="submit">
          LOGIN
          <RiLoginCircleFill className={styles.signInBtnIcon} />
        </button>
        <GoBackButton />
      </form>
    </div>
  );
};
