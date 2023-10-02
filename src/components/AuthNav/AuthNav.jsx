import { NavLink } from 'react-router-dom';
// import styles from './AuthNav.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const signIn = {
  display: 'inline-block',
  fontWeight: 'bold',
  color: '#1976d2',
  borderRadius: '10px',
  height: '50px',

  transition: 'transform 0.2s ease-in -out',

  '&:hover': {
    backgroundColor: '#8997ef',
    color: '#fff',
    transform: 'scale(1.1)',
  },
};

const signUp = {
  borderRadius: '10px',
  color: '#1976d2',
  fontWeight: 'bold',
  height: '50px',
  transition: 'transform 0.2s ease-in -out',
  '&:hover': {
    backgroundColor: '#8997ef',
    color: '#fff',
    transform: 'scale(1.1)',
  },
};

export const AuthNav = () => {
  return (
    <div>
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        sx={{ paddingRight: '12px' }}
      >
        <NavLink to="/register">
          <Button sx={signIn}>Sign Up</Button>
        </NavLink>
        <NavLink to="/login">
          <Button sx={signUp}>Sign In</Button>
        </NavLink>
      </ButtonGroup>
    </div>
  );
};
