import logo from "../../assets/images/logo.svg";
import logo2 from "../../assets/images/logo.png";
import "./sideBar.css";
import { useContext } from "react";
import { NoteContext } from "../../context/noteContext";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
export default function SideBar({ actived, setActived }) {
  const { filters, setFilters, notes, allTags } = useContext(NoteContext);
  const { theme } = useContext(ThemeContext);
  function handleArchived() {
    setFilters({ ...filters, archives: true, tags: "" });
    setActived("archived");
  }
  function handleAll() {
    setFilters({ archives: false, search: "", tags: "" });
    setActived("all");
  }
  function handleTag(tag) {
    setActived(tag._id);
    //ici j'ai fai une modif, le tag s'affiche meme si la note coorespondante est dans les archives, il affichera la note que si on va dans archives
    setFilters({ ...filters, search: "", tags: tag.tag });
  }

  return (
    <div
      className={`hidden lg:block h-screen flex-grow-0 w-64 py-3 px-4  ${
        theme.color === "darkMode"
          ? "bg-neutral-800 text-neutral-200 border-0"
          : "border-neutral-200 border-1"
      }`}
    >
      <div className={`mb-4`}>
        {theme.color === "darkMode" ? (
          <img src={logo2} alt="logo-dark" className="" />
        ) : (
          <img src={logo} alt="logo" className={``} />
        )}
      </div>
      <div className={`mt-4`}>
        <Link
          to={"/dashboard"}
          className={`flex items-center justify-between ${
            theme.color !== "darkMode" && "hover:bg-neutral-100"
          } cursor-pointer rounded-8 py-2.5 px-3 ${
            actived === "all" && "bg-neutral-100"
          } ${
            actived === "all" &&
            theme.color === "darkMode" &&
            "bg-neutral-600 text-white"
          }`}
          onClick={handleAll}
        >
          <span className={`flex gap-2 items-center`}>
            <i className={`fa-regular fa-xl fa-house`}></i>
            All Notes
          </span>
          {actived === "all" && (
            <i className="fa-solid fa-chevron-right fa-xs"></i>
          )}
        </Link>
        <Link
          to={"/dashboard"}
          className={`mt-1 flex items-center justify-between ${
            theme.color !== "darkMode" && "hover:bg-neutral-100"
          } cursor-pointer rounded-8 py-2.5 px-3 ${
            actived === "archived" && "bg-neutral-100"
          } ${
            actived === "archived" &&
            theme.color === "darkMode" &&
            "bg-neutral-600 text-white"
          }`}
          onClick={handleArchived}
        >
          <span className={`flex gap-2 items-center`}>
            <i className="fa-solid fa-file-arrow-down fa-xl"></i> Archived Notes
          </span>
          {actived === "archived" && (
            <i className="fa-solid fa-chevron-right fa-xs"></i>
          )}
        </Link>
      </div>
      <span
        className={`${
          theme.color === "darkMode" ? "bg-neutral-700" : "bg-neutral-200"
        } h-0.5 w-full block mt-4 mb-4`}
      ></span>

      {notes.length > 0 && (
        <div className={`mt-4 md:h-3/4`}>
          <p className={`text-preset-4 text-neutral-500 mb-1`}>Tags</p>
          <div className={`h-4/5 overflow-auto`}>
            {allTags &&
              allTags.map(
                (tag) =>
                  tag.tag !== "" && (
                    <div
                      key={tag._id}
                      className={`mt-1 mb-1 flex items-center justify-between ${
                        theme.color !== "darkMode"
                          ? "hover:bg-neutral-100"
                          : "hover:bg-neutral-600"
                      } cursor-pointer rounded-8 py-2.5 px-3 ${
                        actived === tag._id && "bg-neutral-100"
                      } ${
                        actived === tag._id &&
                        theme.color === "darkMode" &&
                        "bg-neutral-600 text-white"
                      }`}
                      onClick={() => handleTag(tag)}
                    >
                      <span className={`flex gap-2 items-center`}>
                        <i className="fa-solid fa-tag fa-xl"></i>
                        {tag.tag}
                      </span>
                      <i className="fa-solid fa-chevron-right fa-xs"></i>
                    </div>
                  )
              )}
          </div>
        </div>
      )}
    </div>
  );
}
