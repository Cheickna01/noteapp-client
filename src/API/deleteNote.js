import { base_url } from "./config";
import { toast } from "react-toastify";

export const deleteNote = (
  note,
  setNoteID,
  filters,
  setFilters,
  setShowValid,
  setActiveModal,
  navigate
) => {
  fetch(`${base_url}/delete-note`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
    credentials: "include",
  })
    .then((req) => {
      if (req.status !== 200) throw new Error();
      return req.json();
    })
    .then((res) => {
      setFilters({ ...filters });
      setNoteID("")
      setActiveModal("");
      setShowValid("deleted");
      navigate("/dashboard")
    })

    .catch((e) => {
      console.log(e);
      toast.error("Veuillez réessayer!");
    });
};
