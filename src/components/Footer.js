import React from "react";
import { CONTACT, SERVICES } from "../const/data";
import { Icon } from "./Icon";
import { Input } from "./Input";

const Footer = () => {
  return (
    <>
      <hr className="block h-[1px] border-0 border-t-[3px] border-t-hover my-16" />
      <footer className="flex justify-between bg-primary mb-16 px-10">
        <div>
          <h3 className="font-bold text-secondary">{CONTACT.city}</h3>
          {CONTACT.contacts.map((contact) => (
            <div className="flex items-center my-4 gap-5">
              <Icon name={contact.icon} />
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
          <h3 className="font-bold text-secondary">Get in Touch</h3>
          <Input placeholder={"Enter your name *"} />
          <Input
            placeholder={"Enter a valid email address *"}
            type={"email"}
          />
          <textarea
            placeholder={"Type Your Message here"}
            className="w-96 bg-transparent border-white border-x-[1px] border-y-[1px] px-4 py-1 my-2 block"
            rows={6}
          />
          <button className="mt-2 text-white bg-[#3d3d3d] px-7 uppercase font-bold py-2">
            Submit
          </button>
        </div>
      </footer>
    </>
  );
};

export { Footer };
