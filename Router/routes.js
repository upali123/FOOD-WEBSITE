import { Route, Router, Routes } from "react-router-dom";
import Main from "../components/Layout/Main";
import Form from "../Contact/Form";

import React from "react";
import Terms from "../Terms&con/Terms";
import { Contact } from "../Contact/Contact";
import Home from "../Home/Home";
import FormHook from "../Contact/FormHook";
import Datalist from "../Datalist/Datalist";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Terms" element={<Terms />} />
      <Route path="/form" element={<Form />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Datalist" element={<Datalist />} />

      {/* <Route path="/" element={<FormHook />} /> */}
    </Routes>
  );
};
