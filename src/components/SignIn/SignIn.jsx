import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Paper from '../Paper/Paper';

import styles from './SignIn.module.css';
// import ButtonSignIn from 'components/ButtonSignIn/ButtonSignIn';

export const SignIn = () => {
  const dispatch = useDispatch();

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

  return (
    <Paper>
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

        <button className={styles.signInBtn} type="submit">
          LogIn
        </button>
        <div></div>
      </form>
    </Paper>
  );
};
