import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { ValidationContext } from "../../context/validationContext";

export default function Params() {
  const { theme } = useContext(ThemeContext);
  const { setActiveModal } = useContext(ValidationContext);
  return (
    <div
      className={`lg:hidden flex-grow-0 w-full lg:w-64 pr-4 pl-8 ${
        theme.color !== "darkMode" && "border-neutral-200 border-1"
      } py-5 relative`}
    >
      <p
        className={`block lg:hidden text-preset-1 ${
          theme.color === "darkMode" ? "text-white" : "text-neutral-950"
        } mb-4`}
      >
        Settings
      </p>
      <Link
        to={"themes"}
        className={`mt-1 flex items-center justify-between ${
          theme.color === "darkMode"
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-100"
        } cursor-pointer rounded-8 py-2.5 px-3`}
      >
        <span
          className={`flex gap-2 items-center text-preset-4 ${
            theme.color === "darkMode" ? "text-neutral-200" : "text-neutral-700"
          }`}
        >
          <i className={`fa-solid fa-sun fa-x`}></i> Color Theme
        </span>
      </Link>
      <Link
        to={"fonts"}
        className={`mt-2 flex items-center justify-between ${
          theme.color === "darkMode"
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-100"
        } cursor-pointer rounded-8 py-2.5 px-3`}
      >
        <span
          className={`flex gap-2 items-center text-preset-4 ${
            theme.color === "darkMode" ? "text-neutral-200" : "text-neutral-700"
          }`}
        >
          <i className="fa-solid fa-text-height fa-x"></i> Font Theme
        </span>
      </Link>
      <Link
        to={"change-password"}
        className={`mt-2 flex items-center justify-between ${
          theme.color === "darkMode"
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-100"
        } cursor-pointer rounded-8 py-2.5 px-3`}
      >
        <span
          className={`flex gap-2 items-center text-preset-4 ${
            theme.color === "darkMode"
              ? "text--neutral-200"
              : "text-neutral-700"
          }`}
        >
          <i className="fa-solid fa-lock fa-x"></i> Change Password
        </span>
      </Link>
      <span
        className={`${
          theme.color === "darkMode" ? "bg-neutral-800" : "bg-neutral-200"
        } h-0.5 w-full block mt-2 mb-2`}
      ></span>
      <div
        onClick={() => setActiveModal("logout")}
        className={`flex items-center justify-between ${
          theme.color === "darkMode"
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-100"
        } cursor-pointer rounded-8 py-2.5 px-3`}
      >
        <span
          className={`flex gap-2 items-center text-preset-4 ${
            theme.color === "darkMode" ? "text-neutral-200" : "text-neutral-700"
          }`}
        >
          <i className="fa-solid fa-arrow-right-from-bracket fa-x"></i> Logout
        </span>
      </div>
    </div>
  );
}
