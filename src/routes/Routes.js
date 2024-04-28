import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "../components";
import { About, Home, Services, Contact, Food, NonFood } from "../views";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/services"
        element={
          <Layout>
            <Services />
          </Layout>
        }
      />
      <Route
        path="/fooditems"
        element={
          <Layout>
            <Food />
          </Layout>
        }
      />
      <Route
        path="/nonfooditems"
        element={
          <Layout>
            <NonFood />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
    </Routes>
  );
};

export { MainRoutes };
