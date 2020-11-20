import { combineReducers } from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import contactsActions from './contactsActions.js';

const addContact = (state, action) => {
  const contactsLocalStorage = localStorage.getItem('contacts');
  const contact = action.payload.contact;
  if(!contactsLocalStorage){
    localStorage.setItem('contacts', JSON.stringify([contact]));
  } else{
    const parsedContacts = JSON.parse(contactsLocalStorage);
    localStorage.setItem('contacts', JSON.stringify([contact, ...parsedContacts]));
  }

  return [action.payload.contact, ...state]
};
const getFromLS = (state, action) => action.payload;
const removeContact = (state, action) => {
  const localStorageData = JSON.parse(localStorage.getItem('contacts'));
  const newLocalStorageData = localStorageData.filter(contact => contact.id !== action.payload);
  localStorage.setItem('contacts', JSON.stringify(newLocalStorageData));
 return state.filter(contact => contact.id !== action.payload)
};
const filterContact = (state, action) => action.payload;

const contactsReducers = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.removeContact]: removeContact,
  [contactsActions.getFromLS]: getFromLS,
})

const filterReducer = createReducer('', {
  [contactsActions.filterContact]: filterContact,
})

export default combineReducers({
  items: contactsReducers,
  filter: filterReducer,
});