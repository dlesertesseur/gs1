import { Bold, Button, Metric, Subtitle, Text, Title } from "@tremor/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { resetAuthData } from "../redux/Auth";
import UserPanel from "./UserPanel";

const HeaderBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(resetAuthData());
  };

  return (
    <nav className="flex justify-between bg-gray-200 p-2 w-screen sticky top-0 z-50">
      <div className="flex items-center">
        <img className="mx-auto h-14 w-auto" src="gs1-logo.png" alt="gs1-log"></img>
        <div>
          <Title className="ml-4">{t("legend-1")}</Title>
          <Subtitle className="ml-4">{t("legend-2")}</Subtitle>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-wrap content-center">
          <UserPanel />
        </div>
        <div className="flex flex-wrap content-center">
          <Button size="xs" onClick={onLogOut}>
            <Bold>{t("button.logOut")}</Bold>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBar;
