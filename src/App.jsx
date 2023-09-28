import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from './redux/selectors';
import { fetchContacts } from 'redux/operations';

import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Paper from './components/Paper/Paper';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const hendleAddContact = contact => {
    if (contacts.some(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    // <div>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        // backgroundColor: 'green',
      }}
    >
      <div className="wrapper">
        <h1>Phonebook</h1>
        <Paper>
          <ContactForm hendleAddContact={hendleAddContact} />
        </Paper>
        {!!contacts.length && (
          <Paper>
            <h2 style={{ textAlign: 'center' }}>Contacts</h2>
            <Filter filter={filter} />
            {isLoading && !error && (
              <p style={{ color: 'green' }}>Loading contacts...</p>
            )}
            {error && (
              <p style={{ color: 'red' }}>
                Ooops, something went wrong! {error}
              </p>
            )}
          </Paper>
        )}
        <Paper>
          <ContactList contacts={filteredContacts} />
        </Paper>
      </div>
    </div>
    // </div>
  );
};

export default App;
