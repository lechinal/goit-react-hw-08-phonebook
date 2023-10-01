import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export const AuthNav = () => {
  return (
    <div className={styles.authContainer}>
      <ButtonGroup variant="text" aria-label="text button group">
        <NavLink to="/register">
          <Button sx={{ fontWeight: 'bold' }}>Sign Up</Button>
        </NavLink>
        <NavLink to="/login">
          <Button sx={{ fontWeight: 'bold' }}>Sign In</Button>
        </NavLink>
      </ButtonGroup>
    </div>
  );
};
