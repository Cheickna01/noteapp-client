import tagIcon from "../../assets/images/icon-tag.svg";
import timeIcon from "../../assets/images/icon-clock.svg";
import statusIcon from "../../assets/images/icon-status.svg";
import { useContext, useEffect } from "react";
import { fetchNote } from "../../API/fetchNote";
import { dateFormat } from "../../Utils/dateFormat";
import { NoteContext } from "../../context/noteContext";
import { saveNote } from "../../API/saveNote";
import { ValidationContext } from "../../context/validationContext";
import { ThemeContext } from "../../context/themeContext";
export default function NoteDetail() {
  const { notes, noteID, filters, setFilters, note, setNote } =
    useContext(NoteContext);
  const { setShowValid } = useContext(ValidationContext);
  const { theme } = useContext(ThemeContext);

  // useEffect(() => {
  //   if (Array.isArray(notes) && notes.length) {
  //     console.log("first");
  //     setNote(notes[notes.length - 1]);
  //     console.log(note);
  //   } else {
  //     setNote(null);
  //   }
  // }, [notes]);

  // useEffect(() => {
  //   if (Array.isArray(notes) && notes.length && !noteID) {
  //     console.log(noteID)
  //     fetchNote(noteID, setNote);
  //   } else {
  //     setNote(notes[notes.length - 1]);
  //   }
  // }, [noteID, notes]);

  function handleChangeTag(e) {
    setNote({ ...note, tags: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveNote(note, filters, setFilters, setShowValid);
  }
  return (
    <>
      {notes && (
        <div
          className={`hidden lg:block flex-grow-1 px-6 py-5 w-2 ${
            theme.color === "darkMode"
              ? "bg-neutral-950 border-r border-neutral-800 text-white"
              : "border-neutral-200 border-1"
          }`}
        >
          <form
            className={`flex flex-col h-full`}
            onSubmit={(e) => handleSubmit(e)}
            onReset={(e) => window.location.reload()}
          >
            <input
              type="text"
              required
              className={`text-preset-1 ${
                theme.color === "darkMode" ? "text-white" : "text-neutral-950"
              } mb-4 outline-0`}
              value={note?.title ? note?.title : "Enter a title…"}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
            <div className={`flex gap-4 items-baseline-last`}>
              <span
                className={`text-preset-5 text-neutral-700 flex items-center`}
              >
                <i className="fa-solid fa-tag fa-xl"></i>
                <span
                  className={`${
                    theme.color === "darkMode" && "text-neutral-300"
                  }`}
                >
                  Tags
                </span>
              </span>
              {Array.isArray(note?.tags) ? (
                <input
                  type="text"
                  placeholder="Add tags separated by commas (e.g. Work, Planning)"
                  className={`text-preset-5 
                   ${theme.color === "darkMode" && "text-white"}
                   mb-4 outline-0 block w-full`}
                  value={
                    !Array.isArray(note?.tags)
                      ? note?.tags
                      : note?.tags.map((t) => t.tag).join(",")
                  }
                  onChange={(e) => setNote({ ...note, tags: e.target.value })}
                />
              ) : (
                <input
                  type="text"
                  placeholder="Add tags separated by commas (e.g. Work, Planning)"
                  className={`text-preset-5 
                      ${
                        theme.color === "darkMode"
                          ? "text-white"
                          : "text-neutral-400"
                      }
                   mb-4 outline-0 block w-full`}
                  value={note?.tags || ""}
                  onChange={(e) => handleChangeTag(e)}
                />
              )}
              {/* {note?.tags?.map((n) => (
                <p
                  key={n._id}
                  className={`text-preset-5 text-neutral-700`}
                >{`${n.tag}`}</p>
              ))} */}
            </div>

            {filters.archives === true && (
              <div className={`flex gap-4 items-center mb-2`}>
                <span className={`text-preset-5 text-neutral-700`}>
                  <i className="fa-solid fa-spinner fa-xl"></i>
                  <span
                    className={`${
                      theme.color === "darkMode" && "text-neutral-300"
                    }`}
                  >
                    Status
                  </span>
                </span>
                <p
                  className={`text-preset-5 ${
                    theme.color === "darkMode"
                      ? "text-white"
                      : "text-neutral-700"
                  }`}
                >
                  Archived
                </p>
              </div>
            )}

            <div className={`flex gap-4 items-center mt-2`}>
              <span className={`text-preset-5 text-neutral-700`}>
                <i className="fa-solid fa-clock fa-xl"></i>{" "}
                <span
                  className={`${
                    theme.color === "darkMode" && "text-neutral-300"
                  }`}
                >
                  Last edited
                </span>
              </span>
              {note?.lastEdit ? (
                <p
                  className={`text-preset-5 ${
                    theme.color === "darkMode"
                      ? "text-white"
                      : "text-neutral-700"
                  }`}
                >
                  {dateFormat(note?.lastEdit)}
                </p>
              ) : (
                <p
                  className={`text-preset-5 ${
                    theme.color === "darkMode"
                      ? "text-white"
                      : "text-neutral-400"
                  }`}
                >
                  Not yet saved
                </p>
              )}
            </div>

            <span
              className={`bg-neutral-200 h-0.5 w-full block mt-4 mb-4`}
            ></span>

            <textarea
              className={`text-preset-5 ${
                theme.color === "darkMode"
                  ? "text-neutral-100"
                  : "text-neutral-800"
              } w-full h-3/4 px-1`}
              placeholder="Start typing your note here…"
              required
              value={note?.text}
              onChange={(e) => setNote({ ...note, text: e.target.value })}
            ></textarea>
            <span
              className={`bg-neutral-200 h-0.5 w-full block mt-4 mb-4`}
            ></span>

            <div className={`flex gap-4 items-center mt-auto`}>
              <button
                type="submit"
                className={`bg-blue-500 rounded-8 text-white py-3 px-4 cursor-pointer`}
              >
                Save Note
              </button>
              <button
                type="reset"
                className={`${
                  theme.color === "darkMode"
                    ? "bg-neutral-800"
                    : "text-neutral-100"
                } rounded-8 text-neutral-600 cursor-pointer py-3 px-4`}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
