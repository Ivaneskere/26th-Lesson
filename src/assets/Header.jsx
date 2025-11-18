import { useState } from "react"

export default function Header({ page, contacts, setPage, onAddContact, deleteContact }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    const deleteInfo = () => {
        setFirstName(""),
            setLastName(""),
            setPhoneNumber("")
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const newContact = {
            id: Date.now(),
            firstName,
            lastName,
            phoneNumber
        }

        onAddContact(newContact)
        deleteInfo()
        setPage('contacts')
    }


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
                <table className="border-1">
                    <thead className="border-1">
                        <tr>
                            <th>Name</th>
                            <th>lastName</th>
                            <th>NumberOfPhone</th>
                        </tr>
                    </thead>

                    <tbody>
                        {contacts.map((contact) => {
                            return (
                                <tr className="border-1">
                                    <td className="border-1">{contact.firstName}</td>
                                    <td className="border-1">{contact.lastName}</td>
                                    <td className="border-1">{contact.phoneNumber}</td>
                                    <td>
                                        <button type="button" onClick={ () => deleteContact(contact.id)}>❌</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}

            {page === 'add' && (
                <form onSubmit={handleSubmit}>
                    <input name="firstName" type="text" placeholder="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input name="LastName" type="text" placeholder="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <input name="PhoneNumber" type="text" placeholder="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

                    <button type="submit" >Add new contact</button>
                    <button type="button" onClick={deleteInfo}>delete info</button>
                </form>
            )}
        </div>
    )
}
