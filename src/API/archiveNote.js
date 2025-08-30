import { base_url } from "./config";
import { toast } from "react-toastify";

export const archiveNote = (
  note,
  filters,
  setFilters,
  setShowValid,
  setActiveModal,
  navigate
) => {
  fetch(`${base_url}/notes/archive-note`, {
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
      setActiveModal("");
      setShowValid("archived");
      navigate("/dashboard");
    })

    .catch((e) => {
      console.log(e);
      toast.error("Veuillez réessayer!");
    });
};
