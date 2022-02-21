import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookAPI from '../services/API';
// import axios from 'axios';
// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
// } from './phone-book-actions';

// add createAsyncThunk

export const fetchContacts = createAsyncThunk(
    'phonebook/fetchContacts',
    async () => {
        const contacts = await phonebookAPI.fetchContacts();
        return contacts;
    },
    );
export const addContact = createAsyncThunk(
    'phonebook/addContact',
    async ({ nick, number }) => {
        const contact = await phonebookAPI.addContact({ nick, number });
        return contact;
    }
);
export const deleteContact = createAsyncThunk(
    'phonebook/deleteContact',
     async id => {
        const contact = await phonebookAPI.deleteContact(id);
        return contact;
    }
)
// without createAsyncThunk

// axios.defaults.baseURL = 'https://6203af0f4d21c200170b9f5a.mockapi.io/api/v1/';
// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());
//   await axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch(error => dispatch(fetchContactsError(error)));
// };

// export const addContact =
//   ({ nick, number }) =>
//   async dispatch => {
//     const contact = {
//       nick: nick,
//       number: number,
//     };

//     dispatch(addContactRequest());

//     await axios
//       .post('/contacts', contact)
//       .then(({ data }) => {
//         dispatch(addContactSuccess(data));
//       })
//       .catch(error => dispatch(addContactError(error)));
//   };

// export const deleteContact = id => async dispatch => {
//   dispatch(deleteContactRequest());
//   await axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch(error => dispatch(deleteContactError(error)));
// };
