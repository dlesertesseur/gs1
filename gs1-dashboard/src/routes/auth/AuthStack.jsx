import React from "react";
import NotFound from "../../pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";

const AuthStack = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/changePassword" element={<NotFound text={"Cahnge Password"} />} />
        <Route path="/signup" element={<NotFound text={"Create Account"}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthStack;
