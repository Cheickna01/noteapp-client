import { useContext } from "react";
import succesIcon from "../../assets/images/icon-checkmark.svg";
import crossIcon from "../../assets/images/icon-cross.svg";
import "./toast.css";
import { ValidationContext } from "../../context/validationContext";
import { NoteContext } from "../../context/noteContext";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
export default function Toast({ setActived }) {
  const navigate = useNavigate();
  const { showValid, setShowValid } = useContext(ValidationContext);
  const { filters, setFilters } = useContext(NoteContext);
  const { theme } = useContext(ThemeContext);
  let message;
  if (showValid === "archived") {
    message = "Note archived.";
  } else if (showValid === "deleted") {
    message = "Note permanently deleted.";
  } else if (showValid === "restored") {
    message = "Note restored to active notes.";
  } else if (showValid === "settings") {
    message = "Settings updated successfully!";
  } else if (showValid === "changed") {
    message = "Password changed successfully!";
  } else {
    message = "Note saved successfully!";
  }

  function handleArchived() {
    setFilters({ ...filters, archives: true, tags: "" });
    setActived("archived");
  }

  function handleAll() {
    setFilters({ archives: false, search: "", tags: "" });
    setActived("all");
    navigate("/dashboard");
  }
  return (
    <div
      className={`absolute toast-slide-right z-10 bottom-2 lg:bottom-16 right-10 rounded-8 py-2 px-2 h-8 w-96  flex items-center justify-between ${
        theme.color === "darkMode"
          ? "bg-neutral-800 text-white"
          : "bg-white border-neutral-200 border"
      }`}
    >
      <div className={`flex gap-2 items-center`}>
        <i className="fa-solid fa-circle-check fa-1x text-green-500"></i>
        <p
          className={`text-preset-6 ${
            theme.color === "darkMode" ? "text-white" : "text-neutral-950"
          }`}
        >
          {message}
        </p>
      </div>
      <div className={`flex items-center`}>
        {showValid === "archived" && (
          <p
            className={`text-preset-6 ${
              theme.color === "darkMode" ? "text-white" : "text-neutral-950"
            } underline inline cursor-pointer`}
            onClick={handleArchived}
          >
            Archived Notes
          </p>
        )}
        {showValid === "restored" && (
          <p
            className={`text-preset-6 ${
              theme.color === "darkMode" ? "text-white" : "text-neutral-950"
            } underline inline cursor-pointer`}
            onClick={handleAll}
          >
            All Notes
          </p>
        )}
        <i
          className="fa-solid fa-xmark fa-xs ml-2 cursor-pointer"
          onClick={() => setShowValid("")}
        ></i>
      </div>
    </div>
  );
}
