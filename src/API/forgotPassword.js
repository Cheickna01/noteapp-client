import { base_url } from "./config";
import { toast } from "react-toastify";

export const forgotPassword = (data) => {
  fetch(`${base_url}/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })
    .then((req) => {
      console.log(req.status);
      if (req.status !== 200) throw new Error();
      toast.success("Mail envoyé avec succès!");
      return req.json();
    })
    .catch((e) => {
      console.log(e, "gf");
      toast.error("Une erreur est survenue!");
    });
};
