import React from "react";
import { Home } from "./views";
import { Layout, Button, Navbar, Footer, Card } from "./components";
import { Cards } from "./components/Home";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Footer /> */}
      <Button text="Contact Us" />
      <Button text="Learn More" />
      <Home />
      <Cards />
    </div>
  );
};

export default App;
