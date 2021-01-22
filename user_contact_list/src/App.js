import React, { useState, useEffect } from 'react'
import Contact from './Component/Contacts/Contact'
import './App.css';



function App() {
  const [contacts, setContacts] = useState([])
  
  
    useEffect(() => {
      fetch('https://randomuser.me/api?results=25')
        .then(res => res.json())
        .then(data => setContacts(data.results))
    }, [])

  return (
    <div className="App">
      <h3>Contacts List</h3>
      <ul className="cards">
      {contacts && contacts.map((contact) => {
        return (
          <Contact 
            
            firstName = { contact.name.first }
            lastName = { contact.name.last }
            picture = { contact.picture.large}
            streetNum = { contact.location.street.number } 
            streetName = { contact.location.street.name }
            city = { contact.location.city } 
            state= { contact.location.state } 
            country = { contact.location.country } 
            postcode = { contact.location.postcode }
            email = { contact.email }
            phone = { contact.phone }
            cell = { contact.cell }
          />
          )
        }
      )}        
      </ul>
    </div>
  );
}

export default App;
