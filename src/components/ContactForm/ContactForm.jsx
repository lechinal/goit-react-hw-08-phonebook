import React from 'react';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import Paper from '../Paper/Paper.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { getContacts } from '../../redux/contacts/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(getContacts);

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const contactsLists = [...items];
    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
    }

    form.reset();
  };

  return (
    <Paper>
      <form
        className={styles.form}
        onSubmit={handleFormSubmit}
        autoComplete="off"
      >
        <label className={styles.label}>
          Name
          <input
            className={styles.inputContact}
            type="text"
            name="name"
            required
            placeholder="Enter name"
            value={name}
            onChange={handleChangeName}
            autoComplete="name"
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.inputContact}
            type="tel"
            name="number"
            required
            placeholder="Enter phone number"
            value={number}
            onChange={handleChangeNumber}
            autoComplete="number"
          />
        </label>
        <button className={styles.AddContactBtn} type="submit">
          Add contact
        </button>
      </form>
    </Paper>
  );
};
