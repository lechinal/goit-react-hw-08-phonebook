import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// import styles from './ButtonLogOut.module.css';

export const ButtonLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Button
      sx={{ fontWeight: 'bold' }}
      variant="text"
      onClick={handleLogout}
      onMouseOver={e => {
        e.target.style.backgroundColor = '#8997ef';
        e.target.style.color = '#fff';
      }}
      onMouseOut={e => {
        e.target.style.backgroundColor = '';
        e.target.style.color = '#1976d2';
        e.target.style.fontWeight = 'bold';
      }}
    >
      Logout
    </Button>
  );
};
