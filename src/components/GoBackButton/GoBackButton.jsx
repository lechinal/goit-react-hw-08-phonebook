/**
 *
 * ! NOT IN USE, BUT IS USSABLE
 */

import styles from './GoBackButton.module.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function GoBackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.goBackBtnContainer}>
      <Button
        onClick={handleGoBack}
        variant="outlined"
        sx={{
          '&:hover': {
            backgroundColor: 'red',
            color: 'white',
          },
        }}
      >
        GoBack
      </Button>
    </div>
  );
}

export default GoBackButton;
