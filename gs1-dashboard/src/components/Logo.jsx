import React from "react";
import { Group, Image, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();

  return (
    <Group position="center" mb={"xl"}>
      <Image maw={120} src={"/gs1-logo.png"} alt="logo" />
    </Group>
  );
};

export default Logo;
