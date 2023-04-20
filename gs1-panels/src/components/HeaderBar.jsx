import { Bold, Button } from "@tremor/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { resetAuthData } from "../redux/Auth";

const HeaderBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(resetAuthData());
  }
  
  return (
    <nav className="flex justify-between bg-gray-200 p-2 w-screen sticky top-0 z-50">
      <div>
        <img
          className="mx-auto h-14 w-auto"
          src="gs1-logo.png"
          alt="gs1-log"
        ></img>
      </div>
      <div className="flex flex-wrap content-center">
        <Button size="xs" onClick={onLogOut}>
          <Bold>{t("button.logOut")}</Bold>
        </Button>
      </div>
    </nav>
  );
};

export default HeaderBar;
