import arrowRLeft from "../../assets/images/icon-arrow-left.svg";
import archiveIcon from "../../assets/images/icon-archive.svg";
import restoreIcon from "../../assets/images/icon-restore.svg";
import deleteIcon from "../../assets/images/icon-delete.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NoteContext } from "../../context/noteContext";
import { saveNote } from "../../API/saveNote";
import { ValidationContext } from "../../context/validationContext";
import { ThemeContext } from "../../context/themeContext";
import { restoreNote } from "../../API/restoreNote";

export default function PageHeader() {
  const navigate = useNavigate();
  const { filters, setFilters, note, setNote } = useContext(NoteContext);
  const { setActiveModal, setShowValid } = useContext(ValidationContext);
  const { theme } = useContext(ThemeContext);

  function handleSubmit(e) {
    e.preventDefault();
    saveNote(note, filters, setFilters, setShowValid);
  }

  function handleArchive() {
    setActiveModal("archive");
  }
  function handleRestore() {
    restoreNote(note, filters, setFilters, setShowValid);
  }
  return (
    <div className={`lg:hidden pt-4`}>
      <div className={`flex justify-between items-center pb-4`}>
        <span
          className={`flex gap-2 items-center cursor-pointer`}
          onClick={() => navigate(-1)}
        >
          <i className="fa-solid fa-chevron-left fa-xs"></i> Go Back
        </span>
        <div className={`flex gap-4 items-center`}>
          <i
            className="fa-solid fa-trash-can fa-x cursor-pointer"
            onClick={() => setActiveModal("delete")}
          ></i>

          {filters.archives === false ? (
            <i
              className="fa-solid fa-file-arrow-down fa-x cursor-pointer"
              onClick={handleArchive}
            ></i>
          ) : (
            <i
              className="fa-solid fa-rotate-left fa-x cursor-pointer"
              onClick={handleRestore}
            ></i>
          )}
          <button type="reset" className={`block text-preset-5 cursor-pointer`}>
            Cancel
          </button>
          <button
            type="submit"
            className={`text-blue-500 text-preset-5 block cursor-pointer`}
            onClick={(e) => handleSubmit(e)}
          >
            Save Note
          </button>
        </div>
      </div>
      <span
        className={`lg:hidden ${
          theme.color === "darkMode" ? "bg-neutral-800" : "bg-neutral-200"
        } h-0.5 w-full block mb-4`}
      ></span>
    </div>
  );
}
