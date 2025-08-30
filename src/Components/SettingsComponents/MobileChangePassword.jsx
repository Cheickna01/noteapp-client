import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { updateAccount } from "../../API/updateAccount";
import { ValidationContext } from "../../context/validationContext";
import { Link } from "react-router-dom";
export default function MobileChangePassword() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    password: "",
    newPassword: "",
    passWordConfirm: "",
  });
  const [show, setShow] = useState("");
  const { theme } = useContext(ThemeContext);
  const { setShowValid } = useContext(ValidationContext);

  function onShowPassword() {
    setShow(!show);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (data.newPassword === data.passWordConfirm) {
      updateAccount(data, setShowValid, navigate);
    } else {
      toast.error("The two passwords are not the same!");
    }
  }
  return (
    <div className="lg:hidden w-full py-8 h-96.5 px-8">
      <Link
        to={"/dashboard/settings"}
        className={`flex gap-2 items-center cursor-pointer mb-3 text-preset-4 ${
          theme.color === "darkMode" ? "text-white" : "text-neutral-600"
        }`}
      >
        <i className="fa-solid fa-chevron-left fa-x"></i> Settings
      </Link>
      <p
        className={`text-preset-3 ${
          theme.color === "darkMode" ? "text-white" : "text-neutral-950"
        } mb-1`}
      >
        Change Password
      </p>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className={`relative`}>
          <label htmlFor="" className={`text-preset-4 `}>
            Old Password
          </label>
          <input
            type={show ? "text" : "password"}
            required
            minLength={8}
            id="password"
            className={`rounded-8 text-preset-5 px-4 py-3 ${
              theme.color === "darkMode"
                ? "border-neutral-600 focus:border-neutral-650"
                : "border-neutral-300 focus:border-neutral-950"
            } border-2 mt-2 w-full cursor-pointer focus:border-double focus:border-4 `}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {show ? (
            <i
              className="fa-regular fa-eye absolute text-neutral-500 top-1/2 translate-y-1/2 right-2 mx-4 text-center cursor-pointer fa-x"
              onClick={onShowPassword}
            ></i>
          ) : (
            <i
              className="fa-regular fa-eye-slash absolute text-neutral-500 top-1/2 translate-y-1/2 right-2 mx-4 text-center cursor-pointer fa-x"
              onClick={onShowPassword}
            ></i>
          )}
        </div>
        <div className={`relative`}>
          <label htmlFor="" className={`text-preset-4 `}>
            New Password
          </label>
          <input
            type={show ? "text" : "password"}
            required
            minLength={8}
            id="new-password"
            className={`rounded-8 px-4 py-3 text-preset-5 ${
              theme.color === "darkMode"
                ? "border-neutral-600 focus:border-neutral-650"
                : "border-neutral-300 focus:border-neutral-950"
            } border-2 mt-2 w-full cursor-pointer focus:border-double focus:border-4`}
            value={data.newPassword}
            onChange={(e) => setData({ ...data, newPassword: e.target.value })}
          />

          {show ? (
            <i
              className="fa-regular fa-eye absolute top-1/2 text-neutral-500 right-2 mx-4 text-center cursor-pointer fa-x"
              onClick={onShowPassword}
            ></i>
          ) : (
            <i
              className="fa-regular fa-eye-slash absolute top-1/2 text-neutral-500  right-2 mx-4 text-center cursor-pointer fa-x"
              onClick={onShowPassword}
            ></i>
          )}

          <p className={`text-neutral-600 text-preset-6 mt-1`}>
            <i className="fa-solid fa-circle-info fa-x"></i> At least 8
            characters
          </p>
        </div>

        <div className={`relative`}>
          <label htmlFor="" className={`text-preset-4 `}>
            Confirm New Password
          </label>
          <input
            type={show ? "text" : "password"}
            required
            minLength={8}
            id="confirm-password"
            className={`rounded-8 px-4 py-3 text-preset-5 ${
              theme.color === "darkMode"
                ? "border-neutral-600 focus:border-neutral-650"
                : "border-neutral-300 focus:border-neutral-950"
            } border-2 mt-2 w-full cursor-pointer focus:border-double focus:border-4`}
            value={data.passWordConfirm}
            onChange={(e) =>
              setData({ ...data, passWordConfirm: e.target.value })
            }
          />
          {show ? (
            <i
              className="fa-regular fa-eye absolute top-1/2 text-neutral-500 translate-y-1/2 right-2 mx-4 text-center cursor-pointer fa-x"
              onClick={onShowPassword}
            ></i>
          ) : (
            <i
              className="fa-regular fa-eye-slash absolute top-1/2 text-neutral-500 translate-y-1/2 right-2 mx-4 text-center cursor-pointer fa-x"
              onClick={onShowPassword}
            ></i>
          )}
        </div>
        <button
          className={`py-3 px-4 rounded-8 bg-blue-500 text-white text-preset-4 ml-auto mt-6 flex cursor-pointer`}
        >
          Save Password
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
