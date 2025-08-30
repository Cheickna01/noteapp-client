import deleteIcon from "../../assets/images/icon-delete.svg";
import archiveIcon from "../../assets/images/icon-archive.svg";
import restoreIcon from "../../assets/images/icon-restore.svg";
import { useContext } from "react";
import { NoteContext } from "../../context/noteContext";
import { ValidationContext } from "../../context/validationContext";
import { restoreNote } from "../../API/restoreNote";
import { ThemeContext } from "../../context/themeContext";
export default function ActionBar() {
  const { note, filters, setFilters } = useContext(NoteContext);
  const { setActiveModal, setShowValid } = useContext(ValidationContext);
  const { theme } = useContext(ThemeContext);

  function handleRestore() {
    restoreNote(note, filters, setFilters, setShowValid);
  }
  return (
    <div
      className={`hidden lg:block flex-grow-0 w-64 pr-4 pl-8 py-5 ${
        theme.color === "darkMode"
          ? "bg-neutral-950 border-r border-neutral-800 text-white"
          : "border-neutral-200 border-1"
      }`}
    >
      <div
        className={`mt-1 flex items-center justify-between ${
          theme.color !== "darkMode" ? "hover:bg-neutral-100" : "bg-neutral-700"
        } border-1 border-neutral-300 cursor-pointer rounded-8 py-3 px-4 mb-3`}
      >
        {filters.archives === false && (
          <span
            className={`flex gap-2 items-center`}
            onClick={() => setActiveModal("archive")}
          >
            <i className="fa-solid fa-file-arrow-down fa-xl cursor-pointer"></i>
            Archived Notes
          </span>
        )}
        {filters.archives === true && (
          <span className={`flex gap-2 items-center`} onClick={handleRestore}>
            <i className="fa-solid fa-rotate-left fa-xl"></i> Restore Note
          </span>
        )}
      </div>
      <div
        className={`flex items-center justify-between ${
          theme.color !== "darkMode" ? "hover:bg-neutral-100" : "bg-neutral-700"
        } border-1 border-neutral-300 cursor-pointer rounded-8 py-3 px-4`}
        onClick={() => setActiveModal("delete")}
      >
        <span className={`flex gap-2 items-center`}>
          <i className="fa-solid fa-trash-can fa-xl"></i> Delete Note
        </span>
      </div>
    </div>
  );
}
