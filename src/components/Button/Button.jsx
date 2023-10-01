import styles from './Button.module.css';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import Stack from '@mui/material/Stack';

const DeleteButton = ({ onClick }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        className={styles.button}
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={onClick}
      >
        Delete
      </Button>
    </Stack>
  );
};
Button.propTypes = {
  handleDeleteContact: PropTypes.func,
};

export default DeleteButton;
