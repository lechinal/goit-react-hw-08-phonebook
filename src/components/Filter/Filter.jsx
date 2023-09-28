import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { filterAction } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = event => dispatch(filterAction(event.target.value));

  return (
    <div className={styles.filter}>
      <label className={styles.filterLabel}>Find contacts by name:</label>
      <input
        className={styles.inputFilter}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
