import { base_url } from "./config";
import { toast } from "react-toastify";

export const logup = (data, setShowModal) => {
  fetch(`${base_url}/logup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((req) => {
      setShowModal(false);
      if (req.status !== 200) throw new Error();
      toast.success("Compte créer avec succès!");
      return req.json();
    })
    .catch((e) => {
      console.log(e);
      toast.error("Une erreur est survenue!");
    });
};
