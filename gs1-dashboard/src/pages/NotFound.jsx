import { Container, Flex, Text } from "@mantine/core";
import React from "react";

const NotFound = ({text = "NOT FOUND"}) => {
  return (
    <Flex mih={50} bg="rgba(0, 0, 0, .3)" gap="md" justify="center" align="center" direction="row" wrap="wrap">
      <Container>
        <Text>{text}</Text>
      </Container>
    </Flex>
  );
};

export default NotFound;
