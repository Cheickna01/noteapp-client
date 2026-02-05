import { base_url } from "./config";
import { toast } from "react-toastify";

export const saveNote = (note, filters, setFilters,setShowValid) => {
  fetch(`${base_url}/save-note`, {
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
    }).then(res=>{
      setFilters({...filters})
      setShowValid("saved")
    })
   
    .catch((e) => {
      console.log(e);
      toast.error("Veuillez réessayer!");
    });
};
