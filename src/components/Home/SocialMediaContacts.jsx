import React from "react";
import { SocialMediaContactsData } from "../../constants/Home";
import Contact from "./Contact";

function SocialMediaContacts() {
  return (
    <div className="social-media-contacts">
      {SocialMediaContactsData.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </div>
  );
}

export default SocialMediaContacts;
