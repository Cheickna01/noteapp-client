import { useContext } from "react";
import archiveIcon from "../../assets/images/icon-archive.svg";
import { ValidationContext } from "../../context/validationContext";
import { NoteContext } from "../../context/noteContext";
import { archiveNote } from "../../API/archiveNote";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";

export default function ArchiveModal() {
  const navigate = useNavigate();
  const { setActiveModal, setShowValid } = useContext(ValidationContext);
  const { note, filters, setFilters } = useContext(NoteContext);
  const { theme } = useContext(ThemeContext);
  function handleArchive() {
    archiveNote(
      note,
      filters,
      setFilters,
      setShowValid,
      setActiveModal,
      navigate
    );
  }
  return (
    <div
      className={`absolute inset-0 bg-black/40 z-96 flex items-center justify-center`}
    >
      <div
        className={`rounded-12 border ${
          theme.color === "darkMode"
            ? "bg-neutral-700 border-neutral-600"
            : "bg-white border-neutral-200"
        } w-md`}
      >
        <div className={`flex gap-4 items-center px-5 py-5`}>
          <span
            className={`${
              theme.color === "darkMode"
                ? "bg-neutral-600 text-white"
                : "bg-neutral-100"
            } rounded-8 py-1 px-3 block`}
          >
            <i className="fa-solid fa-file-arrow-down fa-2x"></i>
          </span>
          <div className={``}>
            <p
              className={`text-preset-3 ${
                theme.color === "darkMode" ? "text-white" : "text-neutral-950"
              }`}
            >
              Archive Note
            </p>
            <p
              className={`text-preset- ${
                theme.color === "darkMode"
                  ? "text-neutral-200"
                  : "text-neutral-700"
              }`}
            >
              Are you sure you want to archive this note? You can find it in the
              Archived Notes section and restore it anytime.
            </p>
          </div>
        </div>
        <span
          className={`${
            theme.color === "darkMode" ? "bg-neutral-600" : "bg-neutral-200"
          } h-0.5 w-full block`}
        ></span>
        <div className={`flex justify-end items-center gap-4 px-5 py-4`}>
          <button
            className={`rounded-8 ${
              theme.color === "darkMode"
                ? "bg-neutral-500 text-neutral-200"
                : "bg-neutral-100 text-neutral-600"
            } py-3 px-4 text-preset-4 cursor-pointer`}
            onClick={() => setActiveModal("")}
          >
            Cancel
          </button>
          <button
            className={`rounded-8 bg-blue-500 py-3 px-4 text-preset-4 text-white cursor-pointer`}
            onClick={handleArchive}
          >
            Archive Note
          </button>
        </div>
      </div>
    </div>
  );
}
