import axios from 'axios';

axios.defaults.baseURL = 'https://6203af0f4d21c200170b9f5a.mockapi.io/api/v1/';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact({ nick, number }) {
     const contact = {
      nick: nick,
      number: number,
    };
  const { data } = await axios
      .post('/contacts', contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios
    .delete(`/contacts/${id}`);
  return data;
}