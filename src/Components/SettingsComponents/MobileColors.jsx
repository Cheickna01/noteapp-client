import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import { ValidationContext } from "../../context/validationContext";
import { Link } from "react-router-dom";

export default function Colors() {
  const { theme, setTheme, color, setColor } = useContext(ThemeContext);
  const { setShowValid } = useContext(ValidationContext);
  const [activeTheme, setActiveTheme] = useState(
    theme.sys ? "system" : theme.color
  );

  function handleAplly() {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (color === "system") {
      if (isDark) {
        setTheme({ ...theme, color: "darkMode", sys: true });
      } else {
        setTheme({ ...theme, color: "lightMode", sys: true });
      }
    } else {
      setTheme({ ...theme, color: color, sys: false });
    }

    setShowValid("settings");
  }
  function handleLight() {
    setActiveTheme("lightMode");
    // setTheme({ ...theme, color: "lightMode" });
    setColor("lightMode");
  }
  function handleDark() {
    setActiveTheme("darkMode");
    // setTheme({ ...theme, color: "darkMode" });
    setColor("darkMode");
  }
  function handleSys() {
    setActiveTheme("system");
    // setTheme({ ...theme, color: "system" });
    setColor("system");
  }
  return (
    <div className={`lg:hidden w-full py-8 h-96.5 px-8`}>
      <Link
        to={"/dashboard/settings"}
        className={`flex gap-2 items-center cursor-pointer mb-3 text-preset-4 ${
          theme.color === "darkMode" ? "text-white" : "text-neutral-600"
        }`}
      >
        <i className="fa-solid fa-chevron-left fa-x"></i> Settings
      </Link>
      <p
        className={`text-preset-3 ${
          theme.color === "darkMode" ? "text-white" : "text-neutral-950"
        } mb-1`}
      >
        Color Theme
      </p>
      <p
        className={`text-preset-5 ${
          theme.color === "darkMode" ? "text-neutral-300" : "text-neutral-700"
        }`}
      >
        Choose your color theme:
      </p>
      {/* Boite thème clair */}
      <div
        className={`cursor-pointer mt-6 px-4 py-4 rounded-12 border ${
          activeTheme === "lightMode"
            ? `${
                theme.color === "darkMode"
                  ? "bg-neutral-800 border-neutral-700"
                  : "bg-neutral-100 border-neutral-200"
              }`
            : "border-neutral-800"
        } flex justify-between items-center`}
        onClick={handleLight}
      >
        <div className={`flex items-center`}>
          <span
            className={`mr-4 border ${
              theme.color === "darkMode"
                ? "bg-neutral-950 border-neutral-700"
                : "border-neutral-200 bg-white"
            } rounded-12 w-10 h-10 flex justify-center items-center`}
          >
            <i className="fa-solid fa-sun fa-x"></i>
          </span>
          <div>
            <p
              className={`text-preset-4 ${
                theme.color === "darkMode" ? "text-white" : "text-neutral-950"
              }`}
            >
              Light Mode
            </p>
            <p
              className={`text-preset-6 ${
                theme.color === "darkMode"
                  ? "text-neutral-300"
                  : "text-neutral-700"
              } mt-1`}
            >
              Pick a clean and classic light theme
            </p>
          </div>
        </div>
        <span
          className={`block w-4 h-4 rounded-full border ${
            activeTheme !== "lightMode"
              ? "border-neutral-200"
              : "border-blue-500 border-4"
          }`}
        ></span>
      </div>

      {/* Boite thème sombre */}
      <div
        className={`cursor-pointer mt-6 px-4 py-4 rounded-12 border ${
          activeTheme === "darkMode"
            ? `${
                theme.color === "darkMode"
                  ? "bg-neutral-800 border-neutral-700"
                  : "bg-neutral-100 border-neutral-200"
              }`
            : "border-neutral-800"
        } border-neutral-200 flex justify-between items-center`}
        onClick={handleDark}
      >
        <div className={`flex items-center`}>
          <span
            className={`mr-4 border ${
              theme.color === "darkMode"
                ? "bg-neutral-950 border-neutral-700"
                : "border-neutral-200 bg-white"
            } rounded-12 w-10 h-10 flex justify-center items-center`}
          >
            <i className="fa-solid fa-moon fa-x"></i>
          </span>
          <div>
            <p
              className={`text-preset-4 ${
                theme.color === "darkMode" ? "text-white" : "text-neutral-950"
              }`}
            >
              Dark Mode
            </p>
            <p
              className={`text-preset-6 ${
                theme.color === "darkMode"
                  ? "text-neutral-300"
                  : "text-neutral-700"
              } mt-1`}
            >
              Select a sleek and modern dark theme
            </p>
          </div>
        </div>
        <span
          className={`block w-4 h-4 rounded-full border ${
            activeTheme !== "darkMode"
              ? "border-neutral-200"
              : "border-blue-500 border-4"
          }`}
        ></span>
      </div>

      {/* Boite thème system */}
      <div
        className={`cursor-pointer mt-6 px-4 py-4 rounded-12 border ${
          activeTheme === "system"
            ? `${
                theme.color === "darkMode"
                  ? "bg-neutral-800 border-neutral-700"
                  : "bg-neutral-100 border-neutral-200"
              }`
            : "border-neutral-800"
        } border-neutral-200 flex justify-between items-center`}
        onClick={handleSys}
      >
        <div className={`flex items-center`}>
          <span
            className={`mr-4 border ${
              theme.color === "darkMode"
                ? "bg-neutral-950 border-neutral-700"
                : "border-neutral-200 bg-white"
            } rounded-12 w-10 h-10 flex justify-center items-center`}
          >
            <i className="fa-brands fa-windows fa-x"></i>
          </span>
          <div>
            <p
              className={`text-preset-4 ${
                theme.color === "darkMode" ? "text-white" : "text-neutral-950"
              }`}
            >
              System
            </p>
            <p
              className={`text-preset-6 ${
                theme.color === "darkMode"
                  ? "text-neutral-300"
                  : "text-neutral-700"
              } mt-1`}
            >
              Adapts to your device’s theme
            </p>
          </div>
        </div>
        <span
          className={`block w-4 h-4 rounded-full border ${
            activeTheme !== "system"
              ? "border-neutral-200"
              : "border-blue-500 border-4"
          }`}
        ></span>
      </div>
      <button
        onClick={handleAplly}
        className={`py-3 px-4 rounded-8 bg-blue-500 text-white text-preset-4 ml-auto mt-6 flex cursor-pointer`}
      >
        Apply Changes
      </button>
    </div>
  );
}
