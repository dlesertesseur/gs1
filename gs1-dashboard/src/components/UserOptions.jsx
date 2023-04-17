import {
  ActionIcon,
  Avatar,
  Button,
  Group,
  Popover,
  Stack,
  Switch,
  Text,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { resetAuthData } from "../redux/Auth";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import React, { forwardRef } from "react";

const data = [
  {
    key:1,
    title: "Recommendations",
    description: "Digest with best community posts from previous week",
    type: "boolean",
  },
  {
    key:2,
    title: "Dark mode",
    description: "Digest with best community posts from previous week",
    type: "theme",
  },
];

const UserOptions = ({ user }) => {
  const { t } = useTranslation();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(resetAuthData());
  };

  const UserButton = forwardRef((props, ref) => (
    <div ref={ref} {...props}>
      <UnstyledButton sx={{}} mr={"md"}>
        <Group mx={"xs"} m={5}>
          <Avatar src={props.image} radius="xl" />

          <Stack spacing={0}>
            <Text size="md">{props.name}</Text>
            <Text size="xs">{props.position}</Text>
          </Stack>
        </Group>
      </UnstyledButton>
    </div>
  ));

  const items = data.map((item) => (
    <Group key={item.key} position="apart" noWrap spacing="xl">
      <div>
        <Text>{item.title}</Text>
        <Text size="xs" color="dimmed">
          {item.description}
        </Text>
      </div>
      {item.type === 'boolean' ? <Switch onLabel="ON" offLabel="OFF" size="lg" />
      : <Switch
        checked={colorScheme === "dark"}
        onChange={() => toggleColorScheme()}
        size="lg"
        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
        offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
      />}
    </Group>
  ));

  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <UserButton name={user?.firstName + ", " + user?.lastName} position={user?.role} image={"/face.png"} />
      </Popover.Target>
      <Popover.Dropdown
        sx={(theme) => ({ background: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white })}
      >
        <Stack spacing={"xs"}>
          <Avatar src={"/face.png"} size={120} radius={120} mx="auto" />
          <Text ta="center" fz="lg" weight={500} mt="md">
            {user?.firstName + ", " + user?.lastName}
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
            {user?.email}
          </Text>

          {items}

          {/* <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            sx={(theme) => ({
              backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
              color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6],
            })}
          >
            {colorScheme === "dark" ? <IconSun size={24} /> : <IconMoonStars size={24} />}
          </ActionIcon> */}

          <Group grow mt={"xs"}>
            <Button onClick={onClick}>
              <Text>{t("button.logOut")}</Text>
            </Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default UserOptions;
