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
      sx={{ fontWeight: 'bold', paddingTop: '15px' }}
      variant="text"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};
