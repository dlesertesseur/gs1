import React from "react";
import { Group, Paper, Stack, Text, Title, UnstyledButton } from "@mantine/core";

const NumberIndicator = ({ text = "No title", value }) => {
  return (
    <Paper withBorder radius={"md"} p={"xs"}>
      <UnstyledButton>
        <Stack sx={{ justifyContent: "center", alignContent: "center" }} h={"100%"}>
          <Group grow>
            <Text align="center" size={96} weight={550}>
              {value}
            </Text>
          </Group>
          <Group grow mx={"xs"}>
            <Title align="left" order={5}>
              {text}
            </Title>
          </Group>
        </Stack>
      </UnstyledButton>
    </Paper>
  );
};

export default NumberIndicator;
