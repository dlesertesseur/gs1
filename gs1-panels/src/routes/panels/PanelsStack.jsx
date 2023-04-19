import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import MainPanel from "./MainPanel";
import AssociatePanel from "./AssociatePanel";
import HeaderBar from "../../components/HeaderBar";

const PanelsStack = () => {
  return (
    <div className="h-screen">
      <HeaderBar />
      <div>
        <BrowserRouter basename="/">
          <Routes>
            <Route exact path="/" element={<MainPanel />} />
            <Route exact path="/associates" element={<AssociatePanel />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default PanelsStack;
