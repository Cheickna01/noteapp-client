import { useContext, useState, useEffect } from "react";
import NoteItem from "../../Components/NoteItemComponent/NoteItem";
import { NoteContext } from "../../context/noteContext";
import arrowRLeft from "../../assets/images/icon-arrow-left.svg";
import searchIcon from "../../assets/images/icon-search.svg";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";

export default function AllNotes() {
  const [actived, setActived] = useState("");
  const {
    notes,
    setNotes,
    setNoteID,
    filters,
    setFilters,
    search,
    setSearch,
    setNote,
  } = useContext(NoteContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (Array.isArray(notes) && notes.length) {
      setActived(notes[notes.length - 1]?._id);
    }
  }, [notes]);

  function handleSearch(e) {
    setSearch(e.target.value);
    if (search.length > 1) {
      setNotes(
        notes?.filter(
          (n) =>
            n.title.toUpperCase().includes(search.toUpperCase()) ||
            n.text.toUpperCase().includes(search.toUpperCase())
        )
      );
    } else {
      setFilters({ ...filters, tags: "" });
    }
  }
  return (
    notes && (
      <div
        className={`lg:hidden mx-auto w-full lg:w-64 pr-4 pl-8 ${
          theme.color === "darkMode"
            ? "border-0"
            : "border-1 border-neutral-200"
        } py-5 relative`}
      >
        <button
          className={`lg:block hidden mb-4 bg-blue-500 rounded-8 py-3 px-4 text-preset-4 text-white cursor-pointer w-[200px] m-auto`}
        >
          + Create New Notee
        </button>
        {filters.tags && (
          <Link
            to={"/dashboard/tags"}
            className={`flex gap-2 items-center cursor-pointer mb-3`}
          >
            <i className="fa-solid fa-chevron-left fa-xs"></i> Go Back
          </Link>
        )}
        <p
          className={`block lg:hidden text-preset-1 ${
            theme.color === "darkMode" ? "text-white" : "text-neutral-950"
          } mb-4`}
        >
          {(filters.archives && !search && !filters.tags) === true &&
            "Archived Notes"}
          {filters.tags && `Notes Tagged: ${filters.tags}`}
          {!filters.archives && !filters.tags && !search && "All Notes"}
          {search && `Showing results for: ${search}`}
        </p>
        {(search || filters.search) && (
          <div className={`flex items-center cursor-pointer mb-4`}>
            <span
              className={`border-1 border-neutral-300 rounded-l-8 py-3 px-4 w-20 h-full border-r-0`}
            >
              <i className="fa-solid fa-magnifying-glass fa-xl cursor-pointer"></i>
            </span>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => handleSearch(e)}
              className={`py-3 w-full px-4 rounded-8 rounded-l-0 border-l-0 border-1 focus:border-neutral-300 border-neutral-300`}
            />
          </div>
        )}
        {filters.archives === true && !search && (
          <p
            className={`text-preset-5 ${
              theme.color === "darkMode"
                ? "text-neutral-200"
                : "text-neutral-700"
            } mb-4`}
          >
            All your archived notes are stored here. You can restore or delete
            them anytime.
          </p>
        )}
        {filters.tags && (
          <p
            className={`text-preset-5 ${
              theme.color === "darkMode"
                ? "text-neutral-200"
                : "text-neutral-700"
            } mb-4`}
          >
            All notes with the ”{filters.tags}” tag are shown here.
          </p>
        )}
        <p
          className={`text-preset-5 ${
            theme.color === "darkMode" ? "text-neutral-200" : "text-neutral-700"
          } mb-4`}
        >
          {search && `All notes matching ”${search}” are displayed below.`}
        </p>

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
          {filters.archives === false && !search && notes.length <= 0 && (
            <div
              className={`rounded-8 px-2 py-2 border ${
                theme.color === "darkMode"
                  ? "bg-neutral-700 border-neutral-800"
                  : "bg-neutral-100 border-neutral-200"
              }`}
            >
              <p className={`text-preset-5`}>
                You don’t have any notes yet. Start a new note to capture your
                thoughts and ideas.
              </p>
            </div>
          )}
          {filters.archives === true && notes.length <= 0 && (
            <div
              className={`rounded-8 px-2 py-2 ${
                theme.color === "darkMode"
                  ? "bg-neutral-700 border-neutral-800"
                  : "bg-neutral-100 border-neutral-200"
              } border`}
            >
              <p className={`text-preset-5`}>
                No notes have been archived yet. Move notes here for
                safekeeping, or create a new note.
              </p>
            </div>
          )}
        </div>
        <Link
          to={"new-note"}
          onClick={() =>
            setNote({
              title: "Enter a title…",
              text: "Start typing your note here…",
              tags: "",
              lastEdit: "",
            })
          }
        >
          <span
            className={`lg:hidden w-16 h-16 bg-blue-500 rounded-full text-3xl font-bold text-white text-center flex items-center justify-center ml-auto mr-10 absolute right-2 bottom-10 cursor-pointer`}
          >
            +
          </span>
        </Link>
      </div>
    )
  );
}
