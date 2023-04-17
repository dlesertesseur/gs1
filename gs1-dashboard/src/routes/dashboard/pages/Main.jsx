import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React from "react";
import NumberIndicator from "../../../components/indicators/NumberIndicator";
import { Container, Flex, Grid, Group, Stack } from "@mantine/core";
import TitlePage from "../../../components/indicators/TitlePage";
import BarIndicator from "../../../components/indicators/BarIndicator";

const Main = () => {
  return (
    <Container px="xs">
      <Stack >
        <TitlePage title={"SOCIOS"} />
        <Flex mih={50} gap="sm" justify="center" align="flex-start" direction="row" wrap="wrap">
          <Group grow>
            <Stack>
              <NumberIndicator text={"TOTAL HOY"} value={21039} />
              <NumberIndicator text={"ALTAS ANUALES PROMEDIO"} value={145} />
              <NumberIndicator text={"BAJAS ANUALES PROMEDIO"} value={24} />
            </Stack>
          </Group>
          <Group grow>
            <Stack>
              <BarIndicator />
              <BarIndicator />
            </Stack>
          </Group>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Main;
