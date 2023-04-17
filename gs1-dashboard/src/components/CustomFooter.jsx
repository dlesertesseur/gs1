import { Group, Text } from "@mantine/core";
import { DIMENSION } from "../config/Constats";
import { useTranslation } from "react-i18next";
import React from "react";

const CustomFooter = () => {
  const { t } = useTranslation();
  return (
    <Group grow h={DIMENSION.FOOTER_HEIGHT}> 
      <Text color="dimmed" size="sm" m={"xs"}>
        {t("footer.message")}
      </Text>
    </Group>
  );
};

export default CustomFooter;
