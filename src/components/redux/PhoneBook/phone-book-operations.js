import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './phone-book-actions';

axios.defaults.baseURL = 'https://6203af0f4d21c200170b9f5a.mockapi.io/api/v1/';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  await axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact =
  ({ nick, number }) =>
  async dispatch => {
    const contact = {
      nick: nick,
      number: number,
    };

    dispatch(addContactRequest());

    await axios
      .post('/contacts', contact)
      .then(({ data }) => {
        dispatch(addContactSuccess(data));
      })
      .catch(error => dispatch(addContactError(error)));
  };

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  await axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
