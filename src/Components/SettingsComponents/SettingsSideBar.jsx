import arrowRight from "../../assets/images/icon-chevron-right.svg";
import lockIcon from "../../assets/images/icon-lock.svg";
import fontIcon from "../../assets/images/icon-font.svg";
import outIcon from "../../assets/images/icon-logout.svg";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { useNavigate } from "react-router-dom";
import { ValidationContext } from "../../context/validationContext";

export default function SettingsSideBar({ actived, setActived }) {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { setActiveModal } = useContext(ValidationContext);
  function handleColors() {
    setActived("colors");
    navigate("");
  }
  function handleFonts() {
    setActived("fonts");
    navigate("");
  }
  function handlePassword() {
    setActived("password");
    navigate("");
  }
  return (
    <div
      className={`hidden lg:block flex-grow-0 w-full lg:w-64 pr-4 pl-8 ${
        theme.color === "darkMode" ? "border-neutral-800" : "border-neutral-200"
      } border-r-1 py-5 relative`}
    >
      <div
        className={`mt-1 flex items-center justify-between ${
          theme.color === "darkMode"
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-100"
        } cursor-pointer rounded-8 py-2.5 px-3 ${
          actived === "colors" &&
          `${
            theme.color === "darkMode"
              ? "bg-neutral-800"
              : "bg-neutral-100 hover:bg-neutral-100"
          }`
        }`}
        onClick={handleColors}
      >
        <span
          className={`flex gap-2 items-center text-preset-4 ${
            theme.color === "darkMode" ? "text-neutral-200" : "text-neutral-700"
          }`}
        >
          <i
            className={`fa-solid fa-sun fa-x ${
              theme.color === "darkMode"
                ? `${
                    actived === "colors" ? "text-blue-500" : "text-neutral-200"
                  }`
                : "text-neutral-700"
            }`}
          ></i>{" "}
          Color Theme
        </span>
        {actived === "colors" && (
          <i className="fa-solid fa-chevron-right fa-xs"></i>
        )}
      </div>

      <div
        className={`mt-2 flex items-center justify-between ${
          theme.color === "darkMode"
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-100"
        } cursor-pointer rounded-8 py-2.5 px-3 ${
          actived === "fonts" &&
          `${
            theme.color === "darkMode"
              ? "bg-neutral-800"
              : "bg-neutral-100 hover:bg-neutral-100"
          }`
        }`}
        onClick={handleFonts}
      >
        <span
          className={`flex gap-2 items-center text-preset-4 ${
            theme.color === "darkMode" ? "text-neutral-200" : "text-neutral-700"
          }`}
        >
          <i
            className={`fa-solid fa-text-height fa-x ${
              theme.color === "darkMode"
                ? `${
                    actived === "fonts" ? "text-blue-500" : "text-neutral-200"
                  }`
                : "text-neutral-700"
            }`}
          ></i>{" "}
          Font Theme
        </span>
        {actived === "fonts" && <img src={arrowRight} alt="arrow-right" />}
      </div>
      <div
        className={`mt-2 flex items-center justify-between ${
          theme.color === "darkMode"
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-100"
        } cursor-pointer rounded-8 py-2.5 px-3 ${
          actived === "password" &&
          `${
            theme.color === "darkMode"
              ? "bg-neutral-800"
              : "bg-neutral-100 hover:bg-neutral-100"
          }`
        }`}
        onClick={handlePassword}
      >
        <span
          className={`flex gap-2 items-center text-preset-4 ${
            theme.color === "darkMode" ? "text-neutral-200" : "text-neutral-700"
          }`}
        >
          <i
            className={`fa-solid fa-lock fa-x ${
              theme.color === "darkMode"
                ? `${
                    actived === "password"
                      ? "text-blue-500"
                      : "text-neutral-200"
                  }`
                : "text-neutral-700"
            }`}
          ></i>{" "}
          Change Password
        </span>
        {actived === "password" && <img src={arrowRight} alt="arrow-right" />}
      </div>
      <span className={`bg-neutral-200 h-0.5 w-full block mt-2 mb-2`}></span>
      <div
        className={`flex items-center justify-between ${
          theme.color === "darkMode"
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-100"
        } cursor-pointer rounded-8 py-2.5 px-3 ${
          actived === "logout" &&
          `${
            theme.color === "darkMode"
              ? "bg-neutral-800"
              : "bg-neutral-100 hover:bg-neutral-100"
          }`
        }`}
        onClick={()=>setActiveModal("logout")}
      >
        <span
          className={`flex gap-2 items-center text-preset-4 ${
            theme.color === "darkMode" ? "text-neutral-200" : "text-neutral-700"
          }`}
        >
          <i
            className={`fa-solid fa-arrow-right-from-bracket fa-x ${
              theme.color === "darkMode"
                ? `${
                    actived === "logout" ? "text-blue-500" : "text-neutral-200"
                  }`
                : "text-neutral-700"
            }`}
          ></i>{" "}
          Logout
        </span>
        {actived === "logout" && <img src={arrowRight} alt="arrow-right" />}
      </div>
    </div>
  );
}
