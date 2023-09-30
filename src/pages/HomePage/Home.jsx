import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ButtonSignUp from '../../components/ButtonSignUp/ButtonSignUp';
import ButtonSignIn from '../../components/ButtonSignIn/ButtonSignIn';

// import { GiSmartphone } from 'react-icons/gi';
import { RiContactsBookLine } from 'react-icons/ri';
import { GiVibratingSmartphone } from 'react-icons/gi';

import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register');
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Stay Organized with Ease{' '}
        <GiVibratingSmartphone className={`${styles.icon} ${styles.rotate}`} />
      </h1>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Our app makes managing your contacts a breeze. Add, view, and remove
          contacts effortlessly. Simplify your life and take control of your
          <RiContactsBookLine
            className={`${styles.icon2} ${styles.scale}`}
          />{' '}
          with us. Take advantage of all the features:
        </p>
        <div className={styles.BtnsContainer}>
          <ButtonSignUp onClick={handleSignUpClick}>Sign Up</ButtonSignUp>
          <ButtonSignIn onClick={handleSignInClick}>Sign In</ButtonSignIn>
        </div>
      </div>
    </div>
  );
}
