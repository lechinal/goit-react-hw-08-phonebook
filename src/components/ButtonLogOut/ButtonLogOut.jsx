import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import Button from '@mui/material/Button';

// import styles from './ButtonLogOut.module.css';

export const ButtonLogOut = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
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
