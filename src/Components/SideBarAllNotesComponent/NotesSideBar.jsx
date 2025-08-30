import { useContext, useEffect, useState } from "react";
import NoteItem from "../NoteItemComponent/NoteItem";
import { NoteContext } from "../../context/noteContext";
import { createNote } from "../../API/createNewNote";
import { ToastContainer } from "react-toastify";
import { ThemeContext } from "../../context/themeContext";

export default function NotesSideBar() {
  const [actived, setActived] = useState("");
  const {
    notes,
    setNoteID,
    filters,
    search,
    setFilters,
    setNote,
    noteID,
    note,
  } = useContext(NoteContext);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (Array.isArray(notes) && notes.length && !noteID) {
      setActived(notes[notes.length - 1]?._id);
      setNote(notes[notes.length - 1]);
    } else {
      setActived(noteID);
    }
  }, [notes]);

  function handleCreateNote() {
    setNote({
      title: "Enter a title…",
      text: "Start typing your note here…",
      tags: "",
      lastEdit: "",
    });
    createNote(filters, setFilters);
  }
  return (
    <div
      className={`hidden lg:block flex-grow-0 w-full lg:w-64 pr-4 pl-8 py-5 relative ${
        theme.color === "darkMode"
          ? "bg-neutral-950 border-r border-neutral-800 text-white"
          : "border-neutral-200 border-1"
      }`}
    >
      <button
        className={`lg:block hidden mb-4 bg-blue-500 rounded-8 py-3 px-4 text-preset-4 text-white cursor-pointer w-[200px] m-auto`}
        onClick={handleCreateNote}
      >
        + Create New Note
      </button>
      <p className={`block lg:hidden text-preset-1 text-neutral-950 mb-4`}>
        All Notes
      </p>
      {filters.archives === true && (
        <p
          className={`text-preset-5 mb-4 ${
            theme.color === "darkMode" ? "text-white" : "text-neutral-700"
          }`}
        >
          All your archived notes are stored here. You can restore or delete
          them anytime.
        </p>
      )}
      {filters.tags && (
        <p
          className={`text-preset-5 mb-4 ${
            theme.color === "darkMode" ? "text-white" : "text-neutral-700"
          }`}
        >
          All notes with the ”{filters.tags}” tag are shown here.
        </p>
      )}
      <div className={`max-h-[90%] overflow-auto`}>
        {notes.length > 0 &&
          [...notes]
            .reverse()
            .map((note) => (
              <NoteItem
                note={note}
                setNoteID={setNoteID}
                key={note._id}
                actived={actived}
                setActived={setActived}
              />
            ))}
        {search && notes.length <= 0 && (
          <div
            className={`rounded-8 px-2 py-2 ${
              theme.color === "darkMode" ? "bg-neutral-700" : "bg-neutral-100"
            } border border-neutral-200`}
          >
            <p className={`text-preset-5`}>
              No notes match your search. Try a different keyword or{" "}
              <span className={`underline cursor-pointer`}>
                create a new note
              </span>
              .
            </p>
          </div>
        )}
        {notes.length <= 0 && (
          <div
            className={`rounded-8 px-2 py-2 ${
              theme.color === "darkMode"
                ? "bg-neutral-700 border-neutral-800"
                : "bg-neutral-100 border-neutral-200"
            } border`}
          >
            <p className={`text-preset-5`}>
              You don’t have any notes yet. Start a new note to capture your
              thoughts and ideas.
            </p>
          </div>
        )}
      </div>
      <span
        className={`lg:hidden w-16 h-16 bg-blue-500 rounded-full text-white text-center flex items-center justify-center ml-auto mr-10 absolute right-2 bottom-10 cursor-pointer`}
      >
        +
      </span>
      <ToastContainer />
    </div>
  );
}
