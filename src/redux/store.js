import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from '../redux/contactsSlice';
import filterSlice from '../redux/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
  },
});
