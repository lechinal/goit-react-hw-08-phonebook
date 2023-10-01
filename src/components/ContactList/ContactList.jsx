import { useDispatch, useSelector } from 'react-redux';
import { delContact } from '../../redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';

import Paper from '../Paper/Paper';
import Button from '../Button/Button';
import styles from './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(delContact(id));

  if (visibleContacts.length === 0) {
    return null;
  }

  return (
    <Paper>
      <ul className={styles.contactList}>
        {visibleContacts.map((contact, id) => (
          <li key={id} className={styles.itemList}>
            <span className={styles.contactName}>{contact.name}:</span>
            <span className={styles.contactNumber}>{contact.number}</span>
            <Button onClick={() => handleDelete(contact.id)}></Button>
          </li>
        ))}
      </ul>
    </Paper>
  );
};
