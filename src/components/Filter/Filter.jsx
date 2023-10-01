import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filterSlice';

import Paper from '../Paper/Paper';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Paper>
      <div className={styles.filterContainer}>
        <h2 className={styles.filterTitle}>Contacts</h2>
        <label className={styles.filterLabel}>
          Find contacts by name:
          <input
            className={styles.filterInput}
            type="text"
            name="filter"
            placeholder="Enter contact name"
            value={filter}
            onChange={handleChange}
          />
        </label>
      </div>
    </Paper>
  );
};
