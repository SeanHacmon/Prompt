import { useEffect } from 'react'
import { useState } from 'react'
import React from "react";
import Bullets from './components/Bullets';
import Video from './components/Video';
import Form from './components/Form';

import './App.css'

function App() {
  const [contacts, setContacts] = useState([])

  useEffect( () => {fetchContacts()}, []) 

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts")
    const data = await response.json()
    setContacts(data.contact)
    console.log(contacts)
  }
  

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ textAlign: 'center' }}>Feeling household is too diffcult?</h1>
    <h2 style={{ textAlign: 'center' }}>Do you need help organize your daily routine ?</h2>

    <Video/>      
    <Bullets/>
    <Form/>
  </div>
  )
}

export default App
