/**
 *
 * ! NOT IN USE, BUT IS USSABLE
 */

import styles from './GoBackButton.module.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleFill } from 'react-icons/ri';

const goBackBtn = {
  display: 'flex',
  gap: '9px',
  fontWeight: 'bold',
  backgroundColor: '#8997ef',
  border: '1px solid #a2a2a2',
  borderRadius: '5px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '16px',

  '&:hover': {
    backgroundColor: 'blue',
    color: 'white',
    boxShadow: '0 6px 8px rgba(0,0,0,0.3)',
    transform: 'translateY(-2px)',
  },
};

function GoBackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.goBackBtnContainer}>
      <Button onClick={handleGoBack} variant="outlined" sx={goBackBtn}>
        <RiLogoutCircleFill />
        <span>Go Back</span>
      </Button>
    </div>
  );
}

export default GoBackButton;
