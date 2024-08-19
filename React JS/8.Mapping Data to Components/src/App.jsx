import React from 'react'
import './App.css'
import Card from './components/Card'
import contacts from './contacts'

function createCard(contact) {
  return <Card id={contact.id} key={contact.id} name={contact.name} img={contacts[0].img} tel={contacts[0].tel} email={contacts[0].email} />;
}

function App() {
  return (
    <>
      <div>
        <h1 className='heading'>My Contacts</h1>
        {contacts.map(createCard)}
        {/* <Card name={contacts[0].name} img={contacts[0].img} tel={contacts[0].tel} email={contacts[0].email} />
        <Card name={contacts[1].name} img={contacts[1].img} tel={contacts[1].tel} email={contacts[1].email} /> */}
      </div>
    </>
  )
}

export default App