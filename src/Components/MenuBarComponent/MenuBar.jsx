import homeIcon from "../../assets/images/icon-home.svg";
import archiveIcon from "../../assets/images/icon-archive.svg";
import tagIcon from "../../assets/images/icon-tag.svg";
import searchIcon from "../../assets/images/icon-search.svg";
import paramIcon from "../../assets/images/icon-settings.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { NoteContext } from "../../context/noteContext";
import { ThemeContext } from "../../context/themeContext";
export default function MenuBar() {
  const [actived, setActived] = useState("home");
  const { filters, setFilters, setSearch, search } = useContext(NoteContext);
  const { theme } = useContext(ThemeContext);
  function handleArchived() {
    setActived("archived");
    setFilters({ ...filters, archives: true, search: "", tags: "" });
    setSearch("");
  }
  function handleAll() {
    setActived("home");
    setFilters({ archives: false, search: "", tags: "" });
    setSearch("");
  }
  function handleSearch() {
    setActived("search");
    setFilters({ ...filters, search: "o", tags: "" });
  }
  function handleTag() {
    setActived("tags");
    setFilters({ ...filters, archives: false, search: "" });
  }

  return (
    <div
      className={`lg:hidden flex justify-between items-center py-3 px-8 border-t-1 ${
        theme.color === "darkMode" ? "border-neutral-800" : "border-neutral-200"
      }`}
    >
      <Link
        to={""}
        className={`flex flex-col items-center text-preset-6 px-4 py-1 rounded-4 ${
          actived === "home"
            ? `${
                theme.color === "darkMode"
                  ? "bg-neutral-700 text-blue-500"
                  : "text-blue-500 bg-blue-50"
              }`
            : `${
                theme.color === "darkMode"
                  ? "text-neutral-400"
                  : "text-neutral-600"
              }`
        }`}
        onClick={handleAll}
      >
        <i className={`fa-regular fa-2x fa-house block`}></i>
        <span className={`text-center md:block hidden`}>Home</span>
      </Link>
      <Link
        to={""}
        className={`flex flex-col items-center text-preset-6 px-4 py-1 rounded-4 ${
          actived === "search"
            ? `${
                theme.color === "darkMode"
                  ? "bg-neutral-700 text-blue-500"
                  : "text-blue-500 bg-blue-50"
              }`
            : `${
                theme.color === "darkMode"
                  ? "text-neutral-400"
                  : "text-neutral-600"
              }`
        }`}
        onClick={handleSearch}
      >
        <i className="fa-solid fa-magnifying-glass fa-2x"></i>
        <span className={`text-center md:block hidden`}>Search</span>
      </Link>
      <Link
        to={""}
        className={`flex flex-col items-center text-preset-6 px-4 py-1 rounded-4 ${
          actived === "archived"
            ? `${
                theme.color === "darkMode"
                  ? "bg-neutral-700 text-blue-500"
                  : "text-blue-500 bg-blue-50"
              }`
            : `${
                theme.color === "darkMode"
                  ? "text-neutral-400"
                  : "text-neutral-600"
              }`
        }`}
        onClick={handleArchived}
      >
        <i className="fa-solid fa-file-arrow-down fa-2x"></i>{" "}
        <span className={`text-center md:block hidden`}>Archived</span>
      </Link>
      <Link
        to={"tags"}
        className={`flex flex-col items-center text-preset-6 px-4 py-1 rounded-4 ${
          actived === "tags"
            ? `${
                theme.color === "darkMode"
                  ? "bg-neutral-700 text-blue-500"
                  : "text-blue-500 bg-blue-50"
              }`
            : `${
                theme.color === "darkMode"
                  ? "text-neutral-400"
                  : "text-neutral-600"
              }`
        }`}
        onClick={handleTag}
      >
        <i className="fa-solid fa-tag fa-2x"></i>
        <span className={`text-center md:block hidden`}>Tags</span>
      </Link>
      <Link
        to={"settings"}
        className={`flex flex-col items-center text-preset-6 px-4 py-1 rounded-4 ${
          actived === "settings"
            ? `${
                theme.color === "darkMode"
                  ? "bg-neutral-700 text-blue-500"
                  : "text-blue-500 bg-blue-50"
              }`
            : `${
                theme.color === "darkMode"
                  ? "text-neutral-400"
                  : "text-neutral-600"
              }`
        }`}
        onClick={() => setActived("settings")}
      >
        <i className="fa-solid fa-gear fa-2x"></i>
        <span className={`text-center md:block hidden`}>Settings</span>
      </Link>
    </div>
  );
}
