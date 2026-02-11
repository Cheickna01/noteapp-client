import { base_url } from "./config";
import { toast } from "react-toastify";

//recupération de compte
export const changePasswordAuth = (data, setData, token, navigate,setShowModal) => {
  fetch(`${base_url}/auth/${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((req) => {
      setShowModal(false);
      if (req.status !== 200) throw new Error();
      return req.json();
    })
    .then((res) => {
      setData({ ...data, email: res.email });
    })
    .catch((e) => {
      console.log(e);
      toast.error("Veuillez réessayerr!");
      navigate("/");
    });
};

//authentification globale
export const auth = (setUser, navigate,setShowModal) => {
  const token = localStorage.getItem("token");
  fetch(`${base_url}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  })
    .then((req) => {
      setShowModal(false);
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
