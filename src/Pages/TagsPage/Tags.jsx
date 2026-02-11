import { useContext } from "react";
import { NoteContext } from "../../context/noteContext";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";

export default function Tags() {
  const navigate = useNavigate();
  const { allTags, filters, setFilters } = useContext(NoteContext);
  const { theme } = useContext(ThemeContext);
  function handleTag(tag) {
    setFilters({ ...filters, tags: tag.tag });
    navigate("/dashboard");
  }
  console.log(allTags);
  return (
    <div
      className={`lg:hidden mx-auto w-full lg:w-64 pr-4 pl-8 ${
        theme.color !== "darkMode" && "border-neutral-200 border-1"
      } py-5 relative`}
    >
      <p
        className={`block lg:hidden text-preset-1 ${
          theme.color === "darkMode" ? "text-white" : "text-neutral-950"
        } mb-4`}
      >
        Tags
      </p>
      <div className={`h-4/5 overflow-auto`}>
        {allTags &&
          allTags.map(
            (tag) =>
              tag.tag !== "" && (
                <div key={tag._id}>
                  <div
                    className={`mt-1 mb-1 block w-full hover:bg-neutral-100 cursor-pointer rounded-8 py-2.5 px-3`}
                    onClick={() => handleTag(tag)}
                  >
                    <span
                      className={`flex gap-2 items-center ${
                        theme.color === "darkMode" && "text-neutral-300"
                      }`}
                    >
                      <i className="fa-solid fa-tag fa-1x"></i>
                      {tag.tag}
                    </span>
                  </div>
                  <span
                    className={`bg-neutral-200 h-0.5 w-full block mt-4 mb-4`}
                  ></span>
                </div>
              ),
          )}
      </div>
    </div>
  );
}
