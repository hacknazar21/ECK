import React from "react";
import Phone from "../src/img/contacts/Phone.png";
import Email from "../src/img/contacts/Email.png";
import Pin from "../src/img/contacts/Pin.png";

function Contacts({ contacts = [] }) {
  return (
    <section className="page__contacts contacts">
      <div className="contacts__container">
        <div className="contacts__items">
          {contacts.map((contact, id) => (
            <div key={id} className="contacts__item">
              <div className="contacts__icon">
                <img src={contact.image} alt="" />
              </div>
              <h2 className="contacts__title">{contact.title}</h2>
              <div className="contacts__description">
                <p>{contact.text}</p>
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                href={contact.subtitle}
                className="contacts__value"
              >
                {contact.subtitle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contacts;
