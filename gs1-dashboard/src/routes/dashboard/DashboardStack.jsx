import React, { useEffect, useState } from "react";
import NotFound from "../../pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Stack } from "@mantine/core";
import { DIMENSION } from "../../config/Constats";
import Main from "./pages/Main";

const DashboardStack = () => {
  return (
    <Stack spacing={"xs"} mt={DIMENSION.HEADER_HEIGHT}>
      <BrowserRouter basename="/">
        <Routes>
          {/* <Route path="*" element={<Navigate to="/stores" replace />} />*/}
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Stack>
  );
};

export default DashboardStack;
