import React, { useEffect, useState } from "react";
import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import DashboardStack from "../routes/dashboard/DashboardStack";
import { AppShell, Header, Footer, useMantineTheme, Alert, Text } from "@mantine/core";
import { AppStateContext } from "../context/AppStateContext";
import { DIMENSION } from "../config/Constats";
import { IconAlertCircle } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { findUserById } from "../api/user.api.js";

const AppFrame = ({ config }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const { user } = useSelector((state) => state.auth.value);
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const params = { id: user.id };
    async function fetchData(params) {
      try {
        const res = await findUserById(params);
        if (res.errorMessage) {
          setError(true);
          setErrorMessage(res.errorMessage);
        } else {
          setError(false);
          setErrorMessage(null);
          setUserInfo(res);
        }
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
        console.log("DashboardStack useEffect -> error", error);
      }
    }

    fetchData(params);
  }, [user]);

  return (
    <AppStateContext.Provider
      value={{
        opened,
        setOpened,
        config,
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
          <Header h={DIMENSION.HEADER_HEIGHT}>
            <CustomHeader user={userInfo}/>
          </Header>
        }
      >
        {error ? (
          <Alert mt={DIMENSION.HEADER_HEIGHT} icon={<IconAlertCircle size={24} />} title={t("errors.title")} color="red" variant="outline">
            <Text color="red" size={"xs"}>
              {errorMessage}
            </Text>
          </Alert>
        ) : (
          <DashboardStack />
        )}
      </AppShell>
    </AppStateContext.Provider>
  );
};

export default AppFrame;
