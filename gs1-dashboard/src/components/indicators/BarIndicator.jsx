import { Group, Paper, Stack, Title, UnstyledButton } from "@mantine/core";
import React from "react";

const BarIndicator = ({ title = "Without title" }) => {
  return (
    <UnstyledButton>
      <Paper withBorder radius={"md"}>
        <Stack sx={{ justifyContent: "center", alignContent: "center" }} h={"100%"}>
          <Group grow mx={"xs"} mb={"xs"} w={600} h={400}>
            <Title align="left" order={5}>
              {title}
            </Title>
          </Group>
        </Stack>
      </Paper>
    </UnstyledButton>
  );
};

export default BarIndicator;
