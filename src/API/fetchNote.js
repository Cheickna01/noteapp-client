import { base_url } from "./config";
import { toast } from "react-toastify";

export const fetchNote = (noteID, setNote) => {
  const token = localStorage.getItem("token");
  fetch(`${base_url}/notes/${noteID}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  })
    .then((req) => {
      if (req.status !== 200) throw new Error();
      return req.json();
    })
    .then((res) => {
      setNote(res);
    })
    .catch((e) => {
      console.log(e);
      toast.error("Veuillez réessayer!");
    });
};
