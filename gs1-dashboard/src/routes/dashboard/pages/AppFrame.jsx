import React, { useState } from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomFooter from "../../../components/CustomFooter";
import Dashboard from "../../../components/Dashboard";
import { AppShell, Header, Footer, MediaQuery, Burger, useMantineTheme } from "@mantine/core";
import { AppStateContext } from "../../../context/AppStateContext";

const AppFrame = ({config}) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppStateContext.Provider
      value={{
        opened,
        setOpened,
        config
      }}
    >
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        // navbar={
        //   <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, lg: 300 }}>
        //     <CustomNavbar />
        //   </Navbar>
        // }
        footer={
          <Footer>
            <CustomFooter />
          </Footer>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <CustomHeader />
            </div>
          </Header>
        }
      >
        <Dashboard />
      </AppShell>
    </AppStateContext.Provider>
  );
};

export default AppFrame;
