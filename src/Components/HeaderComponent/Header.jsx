import { useContext } from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import searchIcon2 from "../../assets/images/search.png";
import paramIcon from "../../assets/images/icon-settings.svg";
import paramIcon2 from "../../assets/images/settings.png";
import logo from "../../assets/images/logo.svg";
import logo2 from "../../assets/images/logo.png";
import { NoteContext } from "../../context/noteContext";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
export default function Header() {
  const location = useLocation().pathname;
  const { filters, setFilters, search, setSearch, setNotes, notes } =
    useContext(NoteContext);
  const { theme } = useContext(ThemeContext);
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
    <div
      className={`flex justify-between items-center h-[10%] px-8 ${
        theme.color === "darkMode"
          ? "bg-neutral-950 border-b-1 border-neutral-800 text-white"
          : "border-neutral-200 border-1"
      }`}
    >
      <div className={``}>
        <p className={`hidden lg:block text-preset-1`}>
          {(filters.archives && !search) === true &&
            location !== "/dashboard/settings" &&
            "Archived Notes"}
          {filters.tags && `Notes Tagged: ${filters.tags}`}
          {!filters.archives &&
            !filters.tags &&
            !search &&
            location !== "/dashboard/settings" &&
            "All Notes"}
          {search && `Showing results for: ${search}`}
          {location === "/dashboard/settings" && "Settings"}
        </p>
        {theme.color === "darkMode" ? (
          <img src={logo2} alt="logo" className={`lg:hidden`} />
        ) : (
          <img src={logo} alt="logo" className={`lg:hidden`} />
        )}
      </div>
      <div className={`hidden lg:flex gap-4 items-center`}>
        <div className={`flex items-center`}>
          <span
            className={`border-1 border-neutral-300 rounded-l-8 py-3 px-4 border-r-0`}
          >
            <i className="fa-solid fa-magnifying-glass fa-xl cursor-pointer"></i>
          </span>
          <input
            type="text"
            placeholder="Search by title, content, or tags…"
            value={search}
            onChange={(e) => handleSearch(e)}
            className={`py-3 px-4 rounded-8 rounded-l-0 border-l-0 border-1 focus:border-neutral-300 border-neutral-300`}
          />
        </div>
        <Link to={"settings"}>
          <i className="fa-solid fa-gear fa-xl cursor-pointer"></i>
        </Link>
      </div>
    </div>
  );
}
