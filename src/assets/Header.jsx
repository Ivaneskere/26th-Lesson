import Contacts from "./Contacts"
import Form from "./Form"
import { useState } from 'react'

export default function Header({ page, contacts, setPage, deleteContact, onAddContact}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <div>
            <header>
                <button onClick={() => setPage('contacts')}>Contacts</button>
                <button onClick={() => {
                    setPage('add')
                }}>
                    add Contacts
                </button>
            </header>
            {page === 'contacts' && (
                <Contacts contacts={contacts} deleteContact={deleteContact}/>
            )}

            {page === 'add' && (
                <Form firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} setPage={setPage} onAddContact={onAddContact}/>
            )}
        </div>
    )
}
