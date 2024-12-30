import React, { useState } from 'react';
import axios from 'axios';
import styles from './ContactStyles.module.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

   // handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = { name, email, message }; // create the form data object

    try {
      const response = await axios.post('http://localhost:9000/send', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        alert('Email sent successfully!');
        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error occurred. Please try again later.');
    }
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
       <form onSubmit={handleSubmit}>  
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required></textarea>
        </div>
        <input className="btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
