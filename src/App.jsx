import { useEffect, useState } from 'react'
import './App.css'
import Header from './assets/Header'

function App() {
  const [page, setPage] = useState('contacts')
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    async function LoadContacts() {
      try {
        const res = await fetch('/data.json')
        const data = await res.json()
        setContacts(data)
      } catch (err) {
        console.log(err)
      }
    }

    LoadContacts()
  }, [])

  function handleAddContent(newContact) {
    setContacts([...contacts, newContact])
    setPage('contacts')
  }

  const deleteContact = (id) => {
        const newArr = contacts.filter( (contact) => contact.id !== id )
        setContacts(newArr)
    }


  return (
    <>
      <div>
        <Header page={page} contacts={contacts} setPage={setPage} onAddContact={handleAddContent} deleteContact={deleteContact}></Header>
      </div>
    </>
  )
}

export default App