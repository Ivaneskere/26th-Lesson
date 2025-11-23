import React from 'react'

export default function Contacts({ contacts, deleteContact={deleteContact} }) {
    return (
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
                                        <button type="button" onClick={() => deleteContact(contact.id)}>❌</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
    )
}
