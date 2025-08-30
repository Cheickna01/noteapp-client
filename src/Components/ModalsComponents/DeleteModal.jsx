import { useContext } from "react";
import deleteIcon from "../../assets/images/icon-delete.svg";
import { ValidationContext } from "../../context/validationContext";
import { NoteContext } from "../../context/noteContext";
import { deleteNote } from "../../API/deleteNote";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";

export default function DeleteModal() {
  const navigate = useNavigate();
  const { setActiveModal, setShowValid } = useContext(ValidationContext);
  const { note, filters, setFilters, setNoteID } = useContext(NoteContext);
  const { theme } = useContext(ThemeContext);
  function handleDelete() {
    deleteNote(
      note,
      setNoteID,
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
            <i className="fa-solid fa-trash-can fa-2x"></i>
          </span>
          <div className={``}>
            <p
              className={`text-preset-3 ${
                theme.color === "darkMode" ? "text-white" : "text-neutral-950"
              }`}
            >
              Delete Note
            </p>
            <p
              className={`text-preset- ${
                theme.color === "darkMode"
                  ? "text-neutral-200"
                  : "text-neutral-700"
              }`}
            >
              Are you sure you want to permanently delete this note? This action
              cannot be undone.
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
            className={`rounded-8 bg-red-500 py-3 px-4 text-preset-4 text-white cursor-pointer`}
            onClick={handleDelete}
          >
            Delete Note
          </button>
        </div>
      </div>
    </div>
  );
}
