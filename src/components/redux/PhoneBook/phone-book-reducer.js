import toast from 'react-hot-toast';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './phone-book-operations';
import { changeFilter } from './phone-book-actions';
const contacts = createReducer([],
  {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => { 
         if (state.find(contact => contact.nick === payload.nick)) {
        const notify = `${payload.nick} is already on list`;
        toast.error(notify);
        return state;
      }
      state = [...state, payload];
      toast.success(`Contact ${payload.nick} added!`);
      return state;
    },
    [deleteContact.fulfilled]: (state, {payload}) => state.filter(({ id }) => id !== payload),
})

const filter = createReducer('', {
    [changeFilter]: (_, {payload})=> payload,
})
const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
 
})
export default combineReducers({
  contacts,
  filter,
  loading,
});
