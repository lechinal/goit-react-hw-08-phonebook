import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import styles from './ButtonSignUp.module.css';

function ButtonSignUp(props) {
  const { children, onClick } = props;

  return (
    <Button variant="contained" onClick={onClick} className={styles.SignUpBtn}>
      {children}
    </Button>
  );
}

ButtonSignUp.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ButtonSignUp;
