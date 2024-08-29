import React from 'react'
import './App.css'
import Card from './components/Card'
import contacts from './contacts'
import Avatar from './components/Avatar'

function App() {
  return (
    <>
      <div>
        <h1 className='heading'>My Contacts</h1>
        <Avatar img="https://media.licdn.com/dms/image/D5603AQGM5vI1xmHy6g/profile-displayphoto-shrink_800_800/0/1685522326751?e=2147483647&v=beta&t=2KpOSqdYDPAzOmUwxa65mnkINYBRAPLKrmTHuh8En0o" />
        <Card name={contacts[0].name} img={contacts[0].img} tel={contacts[0].tel} email={contacts[0].email} />
        <Card name={contacts[1].name} img={contacts[1].img} tel={contacts[1].tel} email={contacts[1].email} />
      </div>
    </>
  )
}

export default App