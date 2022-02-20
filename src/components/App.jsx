import React, { Component } from 'react';
// import { Toaster } from 'react-hot-toast';
import NameEditor from './Phonebook/NameEditor';
// import ContactList from './Phonebook/ContactList';
// import Filter from './Phonebook/Filter';
import { Container } from './Phonebook/PhoneBook.styled';

class App extends Component {
 
  render() {
    return (
      <>
        <Container>
          {/* <Toaster /> */}
          <h1>Phonebook</h1>
          <NameEditor />
          <h2>Contacts</h2>
          {/* <Filter /> */}
          {/* <ContactList /> */}
        </Container>
      </>
    );
  }
}

export default App;