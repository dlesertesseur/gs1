import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import MainPanel from "./MainPanel";
import AssociatePanel from "./AssociatePanel";

const PanelsStack = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<MainPanel />} />
        <Route exact path="/associates" element={<AssociatePanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PanelsStack;
