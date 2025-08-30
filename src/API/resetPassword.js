import { base_url } from "./config";
import { toast } from "react-toastify";

export const resetPassword = (data,navigate) => {
  fetch(`${base_url}/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((req) => {
      if (req.status !== 200) throw new Error();
      toast.success("Mot de passe changé avec succès!")
      setTimeout(() => {
        navigate("/")
      }, 500);
      return req.json();
    })
    .catch((e) => {
      console.log(e);
      toast.error("Une erreur est survenue!");
    });
};
