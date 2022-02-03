import React from "react";
import { Router } from "@reach/router";
import Dashboard from "../pages/Dashboard";
import Form from "../pages/Form";

const Route = () => (
  <Router>
    <Dashboard path="/" />
    <Form path="/form/:action">
      <Form path="/:id" />
    </Form>
  </Router>
);

export default Route;
