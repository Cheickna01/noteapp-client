import { useNavigate } from "react-router-dom";
import { dateFormat } from "../../Utils/dateFormat";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import { NoteContext } from "../../context/noteContext";

export default function NoteItem({ note, setNoteID, actived, setActived }) {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  function handleNote(note) {
    setActived(note._id);
    setNoteID(note._id);
    navigate(`/dashboard/note/${note._id}`);
  }
  return (
    <div>
      <div
        className={`px-2 py-2 rounded-6 ${
          actived === note._id && "bg-neutral-100"
        } ${
          actived === note._id && theme.color === "darkMode" && "bg-neutral-800"
        } border-neutral-200 mb-1 cursor-pointer`}
        onClick={() => handleNote(note)}
      >
        <p
          className={`text-preset-3 text-neutral-950 mb-3 ${
            theme.color === "darkMode" && "text-white"
          }`}
        >
          {note.title ? note.title : "Untitled Note"}
        </p>
        {note.tags.length > 0 && (
          <div className={`flex flex-wrap gap-1 mb-3`}>
            {note.tags.map((tag) => (
              <span
                key={tag._id}
                className={`px-1.5 py-0.5 rounded-4 ${
                  theme.color === "darkMode"
                    ? "bg-neutral-700 text-white"
                    : "bg-neutral-200"
                } ${
                  actived === note._id &&
                  theme.color === "darkMode" &&
                  "bg-neutral-200 text-white"
                } text-preset-6 text-neutral-950`}
              >
                {tag.tag}
              </span>
            ))}
          </div>
        )}
        {note.title && (
          <p
            className={`text-preset-6 ${
              theme.color === "darkMode"
                ? "text-neutral-200"
                : "text-neutral-700"
            }`}
          >
            {dateFormat(note.lastEdit)}
          </p>
        )}
      </div>
      <span
        className={`${
          theme.color === "darkMode" ? "bg-neutral-800" : "bg-neutral-200"
        } h-0.5 w-full block mt-4 mb-4`}
      ></span>
    </div>
  );
}
