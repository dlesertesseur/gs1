import { UnstyledButton, Group, Avatar, Text, Stack } from "@mantine/core";

export function UserButton({ image, name, position }) {
  return (
    <UnstyledButton sx={{}} mr={"md"}>
      <Group mx={"xs"} m={5}>
        <Avatar src={image} radius="xl" />

        <Stack spacing={0}>
          <Text size="md">{name}</Text>
          <Text size="xs">{position}</Text>
        </Stack>
      </Group>
    </UnstyledButton>
  );
}
