import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "../components";
import { About, Home, Services, Contact, Products } from "../views";

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
        path="/products/food-items"
        element={
          <Layout>
            <Products />
          </Layout>
        }
      />
      <Route
        path="/products/leather-products"
        element={
          <Layout>
            <Products />
          </Layout>
        }
      />
      <Route
        path="/products/hospital-items"
        element={
          <Layout>
            <Products />
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
