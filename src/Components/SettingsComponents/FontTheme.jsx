import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import { ValidationContext } from "../../context/validationContext";
export default function FontTheme() {
  const { theme, setTheme, font, setFont } = useContext(ThemeContext);
  const { setShowValid } = useContext(ValidationContext);
  const [activeTheme, setActiveTheme] = useState(theme.font);

  function handleAplly() {
    setTheme({ ...theme, font: font });
    setShowValid("settings");
  }
  function handleSans() {
    setActiveTheme("sans");
    setFont("sans");
  }
  function handleSerif() {
    setActiveTheme("serif");
    setFont("serif");
  }
  function handleMono() {
    setActiveTheme("mono");
    setFont("mono");
  }

  return (
    <div className={`hidden lg:block w-xl py-8 h-96.5 px-8`}>
      <p
        className={`text-preset-3 ${
          theme.color === "darkMode" ? "text-white" : "text-neutral-950"
        } mb-1`}
      >
        Font Theme
      </p>
      <p
        className={`text-preset-5 ${
          theme.color === "darkMode" ? "text-neutral-300" : "text-neutral-700"
        }`}
      >
        Choose your font theme:
      </p>
      {/* Boite thème clair */}
      <div
        className={`cursor-pointer mt-6 px-4 py-4 rounded-12 border ${
          activeTheme === "sans"
            ? `${
                theme.color === "darkMode"
                  ? "bg-neutral-800 border-neutral-700"
                  : "bg-neutral-100 border-neutral-200"
              }`
            : "border-neutral-800"
        } flex justify-between items-center`}
        onClick={handleSans}
      >
        <div className={`flex items-center`}>
          <span
            className={`mr-4 border ${
              theme.color === "darkMode"
                ? "bg-neutral-950 border-neutral-700"
                : "border-neutral-200 bg-white"
            } rounded-12 w-10 h-10 flex justify-center items-center`}
          >
            <i className="fa-solid fa-font fa-x"></i>
          </span>
          <div>
            <p
              className={`text-preset-4 ${
                theme.color === "darkMode" ? "text-white" : "text-neutral-950"
              }`}
            >
              Sans-serif{" "}
            </p>
            <p
              className={`text-preset-6 ${
                theme.color === "darkMode"
                  ? "text-neutral-300"
                  : "text-neutral-700"
              } mt-1`}
            >
              Clean and modern, easy to read.
            </p>
          </div>
        </div>
        <span
          className={`block w-4 h-4 rounded-full border ${
            activeTheme !== "sans"
              ? "border-neutral-200"
              : "border-blue-500 border-4"
          }`}
        ></span>
      </div>

      {/* Boite thème sombre */}
      <div
        className={`cursor-pointer mt-6 px-4 py-4 rounded-12 border ${
          activeTheme === "serif"
            ? `${
                theme.color === "darkMode"
                  ? "bg-neutral-800 border-neutral-700"
                  : "bg-neutral-100 border-neutral-200"
              }`
            : "border-neutral-800"
        } border-neutral-200 flex justify-between items-center`}
        onClick={handleSerif}
      >
        <div className={`flex items-center`}>
          <span
            className={`mr-4 border ${
              theme.color === "darkMode"
                ? "bg-neutral-950 border-neutral-700"
                : "border-neutral-200 bg-white"
            } rounded-12 w-10 h-10 flex justify-center items-center`}
          >
            <i className="fa-solid fa-paragraph fa-x"></i>
          </span>
          <div>
            <p
              className={`text-preset-4 ${
                theme.color === "darkMode" ? "text-white" : "text-neutral-950"
              }`}
            >
              Serif
            </p>
            <p
              className={`text-preset-6 ${
                theme.color === "darkMode"
                  ? "text-neutral-300"
                  : "text-neutral-700"
              } mt-1`}
            >
              Classic and elegant for a timeless feel.
            </p>
          </div>
        </div>
        <span
          className={`block w-4 h-4 rounded-full border ${
            activeTheme !== "serif"
              ? "border-neutral-200"
              : "border-blue-500 border-4"
          }`}
        ></span>
      </div>

      {/* Boite thème system */}
      <div
        className={`cursor-pointer mt-6 px-4 py-4 rounded-12 border ${
          activeTheme === "mono"
            ? `${
                theme.color === "darkMode"
                  ? "bg-neutral-800 border-neutral-700"
                  : "bg-neutral-100 border-neutral-200"
              }`
            : "border-neutral-800"
        } flex justify-between items-center`}
        onClick={handleMono}
      >
        <div className={`flex items-center`}>
          <span
            className={`mr-4 border ${
              theme.color === "darkMode"
                ? "bg-neutral-950 border-neutral-700"
                : "border-neutral-200 bg-white"
            } rounded-12 w-10 h-10 flex justify-center items-center`}
          >
            <i className="fa-solid fa-terminal fa-x"></i>
          </span>
          <div>
            <p
              className={`text-preset-4 ${
                theme.color === "darkMode" ? "text-white" : "text-neutral-950"
              }`}
            >
              Monospace
            </p>
            <p
              className={`text-preset-6 ${
                theme.color === "darkMode"
                  ? "text-neutral-300"
                  : "text-neutral-700"
              } mt-1`}
            >
              Code-like, great for a technical vibe.
            </p>
          </div>
        </div>
        <span
          className={`block w-4 h-4 rounded-full border ${
            activeTheme !== "mono"
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
