import { base_url } from "./config";
import { toast } from "react-toastify";

export const fetchNote = (noteID, setNote) => {
  fetch(`${base_url}/${noteID}`, {
    method: "GET",
    credentials: "include"
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
