import React from "react";
import AppFrame from "./pages/AppFrame";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppStack = ({config}) => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<AppFrame config={config} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppStack;
