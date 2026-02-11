import { base_url } from "./config";
import { toast } from "react-toastify";

export const forgotPassword = (data,setShowModal) => {
  fetch(`${base_url}/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })
    .then((req) => {
      setShowModal(false)
      if (req.status !== 200) throw new Error();
      toast.success("Mail envoyé avec succès!");
      return req.json();
    }).then(res=>console.log(res))
    .catch((e) => {
      console.log(e);
      toast.error("Une erreur est survenue!");
    });
};
