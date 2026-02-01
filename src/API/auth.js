import { base_url } from "./config";
import { toast } from "react-toastify";

//recupération de compte
export const changePasswordAuth = (data, setData, token, navigate) => {
  fetch(`${base_url}/auth/${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((req) => {
      if (req.status !== 200) throw new Error();
      return req.json();
    })
    .then((res) => {
      setData({ ...data, email: res.email });
    })
    .catch((e) => {
      console.log(e);
      toast.error("un problème avec le serveur!");
      navigate("/");
    });
};

//authentification globale
export const auth = (setUser, navigate) => {
  fetch(`${base_url}/me`, {
    credentials: "include",
  })
    .then((req) => {
      console.log(req.status)
      if (req.status !== 200) throw new Error();
      return req.json();
    })
    .then((res) => {
      setUser(res);
    })
    .catch((e) => {
      navigate("/");
      console.log(e);
      toast.error("Veuillez vous authentifié!");
    });
};
