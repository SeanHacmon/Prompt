import React from "react";
import Bullets from './components/Bullets';
import Video from './components/Video';
import './App.css';
import Form from './components/Form';


const ContactList = ({contacts}) => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center' }}>Prompt</h1>
        <h2 style={{ textAlign: 'center' }}>Sub title </h2>
  
        <Video/>      
        <Bullets/>
        <Form/>
      </div>
    );
};
export default ContactList