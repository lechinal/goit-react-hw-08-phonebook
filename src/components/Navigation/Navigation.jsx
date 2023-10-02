import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import styles from './Navigation.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const btns = {
  fontWeight: 'bold',
  height: '50px',
  borderRadius: '10px',
  transition: 'transform 0.2s ease-in -out',
  '&:hover': {
    backgroundColor: '#8997ef',
    color: '#fff',
    transform: 'scale(1.1)',
  },
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
      <ButtonGroup variant="text" aria-label="text button group">
        <NavLink to="/">
          <Button sx={btns}>Home</Button>
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">
            <Button sx={btns}>Contacts</Button>
          </NavLink>
        )}
      </ButtonGroup>
    </nav>
  );
};
