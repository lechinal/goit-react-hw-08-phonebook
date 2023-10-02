import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// import styles from './ButtonLogOut.module.css';

const logoutBtn = {
  display: 'inline-block',
  fontWeight: 'bold',
  color: '#1976d2',
  padding: '8px 16px',
  borderRadius: '10px',
  height: '50px',
  margin: '9px 9px ',
  transition: 'transform 0.2s ease-in -out',

  '&:hover': {
    backgroundColor: '#8997ef',
    color: '#fff',
    transform: 'scale(1.1)',
  },
};

export const ButtonLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Button
      sx={logoutBtn}
      variant="text"
      onClick={handleLogout}
      // onMouseOver={e => {
      //   e.target.style.backgroundColor = '#8997ef';
      //   e.target.style.color = '#fff';
      // }}
      // onMouseOut={e => {
      //   e.target.style.backgroundColor = '';
      //   e.target.style.color = '#1976d2';
      //   e.target.style.fontWeight = 'bold';
      // }}
    >
      Logout
    </Button>
  );
};
