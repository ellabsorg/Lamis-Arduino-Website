import React from 'react'
import { Link } from "react-router-dom";

function Contact({contact}) {
  return (
    <Link to={contact.path} className="contact">
            <img
              className="icon"
              src={contact.icon}
              alt={contact.icon}
              style={{ background: contact.background }}
            />
            <p>on {contact.name}</p>
          </Link>
  )
}

export default Contact
