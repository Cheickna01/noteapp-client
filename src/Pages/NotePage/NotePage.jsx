import tagIcon from "../../assets/images/icon-tag.svg";
import timeIcon from "../../assets/images/icon-clock.svg";
import statusIcon from "../../assets/images/icon-status.svg";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { fetchNote } from "../../API/fetchNote";
import { dateFormat } from "../../Utils/dateFormat";
import PageHeader from "../../Components/PageHeaderComponent/PageHeader";
import { NoteContext } from "../../context/noteContext";
import NotesSideBar from "../../Components/SideBarAllNotesComponent/NotesSideBar";
import NoteDetail from "../../Components/NoteDetailComponent/NoteDetail";
import ActionBar from "../../Components/ActionSideBarComponent/ActionBar";
import { ThemeContext } from "../../context/themeContext";
export default function NotePage() {
  const param = useParams().noteId;
  const { filters, note, setNote, notes, noteID } = useContext(NoteContext);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    fetchNote(noteID, setNote);
  }, [noteID]);
  function handleChangeTag(e) {
    setNote({ ...note, tags: e.target.value });
  }
  return (
    <>
      <NotesSideBar />
      {notes.length > 0 && (
        <>
          <NoteDetail />
          <ActionBar />
        </>
      )}
      <div className={`lg:hidden flex-grow-1 px-6 w-2`}>
        <form
          className={`h-full flex flex-col`}
          onSubmit={(e) => handleSubmit(e)}
          onReset={(e) => window.location.reload()}
        >
          <PageHeader />
          <input
            type="text"
            required
            className={`text-preset-1 ${
              theme.color === "darkMode" ? "text-white" : "text-neutral-950"
            } mb-4 outline-0`}
            value={note?.title || "Enter a title..."}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
          <div className={`flex gap-4 items-baseline-last`}>
            <span
              className={`text-preset-5 ${
                theme.color === "darkMode"
                  ? "text-neutral-300"
                  : "text-neutral-700"
              } flex items-center`}
            >
              <i className="fa-solid fa-tag fa-xl"></i> <span>Tags</span>
            </span>
            {Array.isArray(note?.tags) ? (
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
                              }"
                           mb-4 outline-0 block w-full`}
                value={note?.tags || ""}
                onChange={(e) => handleChangeTag(e)}
              />
            )}
          </div>

          {filters.archives === true && (
            <div className={`flex gap-4 items-center mb-2`}>
              <span
                className={`text-preset-5 ${
                  theme.color === "darkMode"
                    ? "text-neutral-300"
                    : "text-neutral-400"
                }`}
              >
                <i className="fa-solid fa-rotate-left fa-xl"></i>{" "}
                <span>Status</span>
              </span>
              <p
                className={`text-preset-5 ${
                  theme.color === "darkMode" ? "text-white" : "text-neutral-700"
                }`}
              >
                Archived
              </p>
            </div>
          )}

          <div className={`flex items-center gap-2 mt-2`}>
            <span
              className={`text-preset-5 ${
                theme.color === "darkMode"
                  ? "text-neutral-300"
                  : "text-neutral-700"
              } block`}
            >
              <i className="fa-solid fa-clock fa-xl"></i>{" "}
              <span>Last edited</span>
            </span>
            {note?.lastEdit ? (
              <p
                className={`text-preset-5 ${
                  theme.color === "darkMode"
                    ? "text-neutral-300"
                    : "text-neutral-700"
                }`}
              >
                {dateFormat(note?.lastEdit)}
              </p>
            ) : (
              <p className={`text-preset-5 text-neutral-400`}>Not yet saved</p>
            )}
          </div>

          <span
            className={`${
              theme.color === "darkMode" ? "bg-neutral-800" : "bg-neutral-200"
            } h-0.5 w-full block mt-4 mb-4`}
          ></span>

          <textarea
            className={`text-preset-5 ${
              theme.color === "darkMode"
                ? "text-neutral-100"
                : "text-neutral-800"
            } w-full h-3/4 px-1`}
            value={note.text}
            onChange={(e) => setNote({ ...note, text: e.target.value })}
          ></textarea>
          <span
            className={`hidden lg:block bg-neutral-200 h-0.5 w-full mt-4 mb-4`}
          ></span>
        </form>
      </div>
    </>
  );
}
