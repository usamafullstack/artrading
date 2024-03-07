import React from "react";
import { Home } from "./views";
import { Layout, Button, Navbar, Footer, Card } from "./components";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Footer /> */}
      <Button text="Contact Us" />
      <Button text="Learn More" />
      <Home />
      <Card />
    </div>
  );
};

export default App;
