import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      Delete
    </button>
  );
};
Button.propTypes = {
  handleDeleteContact: PropTypes.func,
};

export default Button;
