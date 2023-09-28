import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './ContactList.module.css';
import { deleteContact } from 'redux/operations';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ul className={styles.items}>
      {contacts.map(i => {
        return (
          <li key={i.id} className={styles.contactList}>
            {i.name}: {i.number}
            <Button handleDeleteContact={() => dispatch(deleteContact(i.id))} />
          </li>
        );
      })}
    </ul>
  );
};

// propTypes

ContactList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};
