import { Group, Paper, Title, useMantineTheme } from "@mantine/core";
import React from "react";

const TitlePage = ({ title }) => {
  const theme = useMantineTheme();
  return (
    <Paper
      withBorder
      p={"xs"}
      radius={"md"}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : null
      })}
    >
      <Group grow mx={"xs"}>
        <Title align="center" order={3} >
          {title}
        </Title>
      </Group>
    </Paper>
  );
};

export default TitlePage;
