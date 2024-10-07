import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import initialContacts from "./contacts.json";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(stringifiedContacts) ?? initialContacts;
    return parsedContacts;
  });

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem("contacts", stringifiedContacts);
  }, [contacts]);

  const [search, setSearch] = useState("");
  const addContact = (newContactData) => {
    const newContact = {
      ...newContactData,
      id: nanoid(),
    };
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = (contactData) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactData);
    });
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
