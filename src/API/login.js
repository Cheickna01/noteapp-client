import { base_url } from "./config";
import { toast } from "react-toastify";

export const login = (data,navigate) => {
  fetch(`${base_url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })
    .then((req) => {
      if (req.status !== 200) throw new Error();
      toast.success("Connecté avec succès!");
      setTimeout(() => {
        navigate("/dashboard")
      }, 1000);
      return req.json();
    })
    .catch((e) => {
      console.log(e);
      toast.error("Mot de passe ou e-mail incorrect!");
    });
};
