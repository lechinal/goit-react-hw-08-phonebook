import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import styles from './Navigation.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
      <ButtonGroup variant="text" aria-label="text button group">
        <NavLink to="/" className={styles.navLink}>
          <Button>Home</Button>
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={styles.navLink}>
            <Button>Contacts</Button>
          </NavLink>
        )}
      </ButtonGroup>
    </nav>
  );
};
