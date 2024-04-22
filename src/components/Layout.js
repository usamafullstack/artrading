import React, { useState } from "react";
import { Navbar, MobileNav } from "./Navbar";
import { Footer } from "./Footer";
import { Icon } from "./Icon";
import { useNavigate } from "react-router";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="flex lg:hidden items-center justify-center w-full relative">
        <div
          onClick={() => setToggleMenu(!toggleMenu)}
          className="cursor-pointer absolute left-0">
          <Icon
            name={toggleMenu ? "close" : "hamburger"}
            color="white"
            size={40}
          />
        </div>
        <img
          alt="Lint Fix"
          className="cursor-pointer"
          src={require("../assets/png/logo.jpeg")}
          width={100}
          height={100}
          onClick={() => navigate("/")}
        />
      </div>
      {toggleMenu ? (
        <MobileNav closeNav={() => setToggleMenu(false)} />
      ) : (
        <>
          {children}
          <Footer />
        </>
      )}
    </div>
  );
};

export { Layout };
