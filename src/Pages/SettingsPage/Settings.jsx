import { useState } from "react";
import SettingsSideBar from "../../Components/SettingsComponents/SettingsSideBar";
import { Outlet } from "react-router-dom";
import Colors from "../../Components/SettingsComponents/Colors";
import FontTheme from "../../Components/SettingsComponents/FontTheme";
import PasswordChange from "../../Components/SettingsComponents/PasswordChange";

export default function Settings() {
  const [actived, setActived] = useState("colors");
  return (
    <>
      <SettingsSideBar actived={actived} setActived={setActived} />
      {actived === "colors" && <Colors />}
      {actived === "fonts" && <FontTheme />}
      {actived === "password" && <PasswordChange />}
      <Outlet />
    </>
  );
}
