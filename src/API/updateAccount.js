import { base_url } from "./config";
import { toast } from "react-toastify";

export const updateAccount = (data, setShowValid, navigate) => {
  fetch(`${base_url}/update-account`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })
    .then((req) => {
      if (req.status !== 200) throw new Error();

      return req.json();
    })
    .then((res) => {
      setShowValid("settings");
      setTimeout(() => {
        fetch(`${base_url}/logout`, {
          method: "POST",
          credentials: "include",
        }).then((req) => {
          navigate("/");
        });
      }, 1500);
    })
    .catch((e) => {
      console.log(e);
      toast.error("Old Password incorrect!");
    });
};
