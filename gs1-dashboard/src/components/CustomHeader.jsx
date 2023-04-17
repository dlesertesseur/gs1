import React from "react";
import {
  useMantineColorScheme,
  ActionIcon,
  Image,
  Flex,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { useContext } from "react";
import { AppStateContext } from "../context/AppStateContext";
import { DIMENSION } from "../config/Constats";
import { UserButton } from "./UserButton";
import { useSelector } from "react-redux";

const CustomHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { config } = useContext(AppStateContext);
  const { user } = useSelector((state) => state.auth.value);

  return (
    <Flex
      justify={"space-between"}
      dir={"row"}
      w={"100%"}
      align={"center"}
      h={DIMENSION.HEADER_HEIGHT}
    >
      <Image maw={100} src={"/gs1-logo.png"} alt="logo" />
      <Flex dir="row" align={"center"} justify={"center"}>
        <UserButton name={"Maria Lopez Ortega"} position={"Gerente comercial"} image={"/face.png"}/>
        <ActionIcon
          onClick={() => toggleColorScheme()}
          size="lg"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            color:
              theme.colorScheme === "dark"
                ? theme.colors.yellow[4]
                : theme.colors.blue[6],
          })}
        >
          {colorScheme === "dark" ? (
            <IconSun size={24} />
          ) : (
            <IconMoonStars size={24} />
          )}
        </ActionIcon>
      </Flex>
    </Flex>
  );
};

export default CustomHeader;
