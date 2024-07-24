import { addContact } from '../../redux/contactsSlice'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'

export default function App() {
    return (<div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox />
        <ContactList />
        </div>
    )
}