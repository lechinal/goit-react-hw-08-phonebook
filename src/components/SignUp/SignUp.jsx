import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// import Paper from '../Paper/Paper';
import styles from './SignUp.module.css';
// import { signUpBtn } from './SignUp.module.css';
import { BsSendFill } from 'react-icons/bs';

export const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="wrapper">
      <form
        className={styles.signUpForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={styles.signUpLabel}>
          Username
          <input
            className={styles.signUpInput}
            type="text"
            name="name"
            placeholder="Enter user name"
          />
        </label>
        <label className={styles.signUpLabel}>
          Email
          <input
            className={styles.signUpInput}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </label>
        <label className={styles.signUpLabel}>
          Password
          <input
            className={styles.signUpInput}
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </label>

        <button className={styles.signUpBtn} type="submit">
          Sign Up
          <BsSendFill className={styles.signUpBtnIcon} />
        </button>
      </form>
    </div>
  );
};
