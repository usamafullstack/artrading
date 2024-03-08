import React from "react";
import { Home } from "./views";
import { Layout, Navbar, Footer } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
