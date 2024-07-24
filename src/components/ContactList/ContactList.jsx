import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'
import { selectFilter } from '../../redux/filtersSlice';

export default function ContactList() {
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const contactsFilter = contacts.filter(contact => filter ? contact.name.toLowerCase().includes(filter.toLowerCase()) : true)

    const handleDelete = (id) => {
        dispatch(deleteContact(id))
    }



    return (
        <ul className={css.container}>
            {contactsFilter.map((contact) => (
                <li key={contact.id}><Contact contact={contact} onDelete={handleDelete } /></li>
            ))}
        </ul>
    )
}