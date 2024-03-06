import React from "react";
import { CONTACT, SERVICES } from "../const/data";

const Footer = () => {
  return (
    <footer className="flex justify-between bg-primary">
      <div>
        <h3 className="font-bold text-secondary">{CONTACT.city}</h3>
        {CONTACT.contacts.map((contact) => (
          <div className="flex items-center my-4">
            <img href={contact.icon} alt="Icon" />
            <div className="flex flex-col">
              <p className="text-white">{contact.line1}</p>
              <p className="text-white">{contact.line2}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="font-bold text-secondary">Services</h3>
        {SERVICES.map((service) => (
          <p className="text-white my-2">{service}</p>
        ))}
      </div>
      <div>
        <h3>{CONTACT.city}</h3>
        {CONTACT.contacts.map((contact) => {
          return (
            <div className="flex items-center">
              <img href={contact.icon} alt="Icon" />
              <div className="flex-row">
                <p>{contact.line1}</p>
                <p>{contact.line2}</p>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export { Footer };
