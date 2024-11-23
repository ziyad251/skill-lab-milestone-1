
import React, { useState } from 'react';

const ContactPage = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here"
        ></textarea>
        <button type="submit">Send</button>
      </form>

      <p>Contact Information:</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: RESTOCAFE</p>
      <p>Address: near sahyadri college,adyar</p>
    </div>
  );
};

export default ContactPage;
