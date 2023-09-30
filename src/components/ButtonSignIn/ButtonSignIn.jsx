import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonSignIn.module.css';
import Button from '@mui/material/Button';

function ButtonSignIn(props) {
  const { children, onClick } = props;

  return (
    <Button variant="contained" onClick={onClick} className={styles.SignInBtn}>
      {children}
    </Button>
  );
}

ButtonSignIn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonSignIn;
