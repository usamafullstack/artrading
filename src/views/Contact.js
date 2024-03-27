import React from "react";
import { Button, Input, NextSteps } from "../components";

const Contact = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="my-10 flex flex-col gap-5">
        <div className="flex items-center gap-1">
          <img
            src={require("../assets/png/pointer.png")}
            height={20}
            width={20}
          />
          <p className="text-white font-bold">Contact Us</p>
        </div>
        <p className="text-6xl text-white">Contact Us</p>
        <p className="text-grey text-xl font-semibold">
          Have a question? Want to know more about us?
        </p>
      </div>
      <div className="bg-[#092440] p-14 rounded-3xl">
        <Input
          placeholder={"Enter your name *"}
          className={"border-[#21578c]"}
        />
        <Input
          placeholder={"Enter a valid email address *"}
          className={"border-[#21578c]"}
          type={"email"}
        />
        <textarea
          placeholder={"Type Your Message here"}
          className="w-96 bg-transparent border-[#21578c] border-x-[2px] border-y-[2px] px-4 py-1 my-2 block"
          rows={6}
        />
        <Button
          text={"Submit"}
          classname={"mt-4"}
        />
      </div>
      <NextSteps />
    </section>
  );
};

export { Contact };
