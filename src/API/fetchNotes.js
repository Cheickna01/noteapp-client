import { useNavigate } from "react-router-dom";
import { base_url } from "./config";
import { toast } from "react-toastify";

export const fetchNotes = (setNotes, filters, setAllTags) => {
  fetch(`${base_url}/notes/every`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(filters),
  })
    .then((req) => {
      if (req.status !== 200) throw new Error();
      return req.json();
    })
    .then((res) => {
      setNotes(res.notes);
      setAllTags(res.tags);
    })
    .catch((e) => {
      console.log(e);
      toast.error("Veuillez réessayerrr!");
    });
};
