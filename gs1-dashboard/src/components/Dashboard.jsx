import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";

const Dashboard = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<Navigate to="/stores" replace />} />*/}
      <Route exact path="/" element={<NotFound />} />
    </Routes>
  );
};

export default Dashboard;
