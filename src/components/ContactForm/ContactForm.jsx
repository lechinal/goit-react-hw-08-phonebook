import React from 'react';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import Paper from '../Paper/Paper.jsx';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const isContactExist = items.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    toast.success(`${name} added to contacts`);
    setName('');
    setNumber('');
    e.currentTarget.reset();
  };

  return (
    <>
      <h1>Phonebook</h1>
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
        <ToastContainer autoClose={3000} />
      </Paper>
    </>
  );
};
