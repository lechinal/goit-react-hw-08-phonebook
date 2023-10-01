import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import Button from '@mui/material/Button';

import styles from '../UserMenu/UserMenu.module.css';

export const ButtonLogOut = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Button
      className={styles.logoutBtn}
      variant="contained"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};
