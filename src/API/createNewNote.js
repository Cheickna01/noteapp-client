import { base_url } from "./config";
import { toast } from "react-toastify";

export const createNote = (filters, setFilters) => {
  fetch(`${base_url}/notes/create-note`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    credentials: "include",
  })
    .then((req) => {
      if (req.status !== 200) throw new Error();
      return req.json();
    })
    .then((res) => {
      setFilters({ ...filters });
    })
    .catch((e) => {
      console.log(e);
      toast.error("Veuillez réessayer!");
    });
};
