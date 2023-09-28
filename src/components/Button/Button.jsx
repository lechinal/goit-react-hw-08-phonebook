import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ handleDeleteContact }) => {
  return (
    <button
      type="button"
      onClick={handleDeleteContact}
      className={styles.button}
    >
      Delete
    </button>
  );
};
Button.propTypes = {
  handleDeleteContact: PropTypes.func,
};

export default Button;
