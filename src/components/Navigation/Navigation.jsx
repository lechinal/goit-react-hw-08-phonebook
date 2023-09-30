import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.navLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.navLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
