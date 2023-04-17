import React from "react";
import { Image, Flex } from "@mantine/core";
import { useContext } from "react";
import { AppStateContext } from "../context/AppStateContext";
import { DIMENSION } from "../config/Constats";
import UserOptions from "./UserOptions";

const CustomHeader = ({ user }) => {
  const { config } = useContext(AppStateContext);

  return (
    <Flex justify={"space-between"} dir={"row"} w={"100%"} align={"center"} h={DIMENSION.HEADER_HEIGHT}>
      <Image maw={100} src={"/gs1-logo.png"} alt="logo" ml={"xs"} />
      <Flex dir="row" align={"center"} justify={"center"}>
        <UserOptions user={user} />
      </Flex>
    </Flex>
  );
};

export default CustomHeader;
