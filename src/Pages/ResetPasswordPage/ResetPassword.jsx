import hidePasswordIcon from "../../assets/images/icon-hide-password.svg";
import showPasswordIcon from "../../assets/images/icon-show-password.svg";
import infoIcon from "../../assets/images/icon-info.svg";
import logo from "../../assets/images/logo.svg";
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { changePasswordAuth } from "../../API/auth";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../API/resetPassword";
import { ThemeContext } from "../../context/themeContext";
import Spinner from "../../Components/Modals/Spinner";
import { createPortal } from "react-dom";
export default function ResetPassword() {
  const token = useParams().token;
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState("");
  const [showCPassword, setShowCPassword] = useState("");
  const { theme } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState("");
  useEffect(() => {
    changePasswordAuth(data, setData, token, navigate);
  }, []);
  function onShowPassword() {
    setShowPassword(!showPassword);
  }
  function onShowCPassword() {
    setShowCPassword(!showCPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (data.confirmPassword === data.password) {
      setShowModal(true);
      resetPassword(data, navigate,setShowModal);
    }
  }
  const spinner = createPortal(<Spinner />, document.body);

  return (
    <div
      className={`flex items-center justify-center h-screen ${
        theme.font
      } bg-neutral-100 ${theme.color === "darkMode" && "bg-neutral-700"}`}
    >
      <div
        className={`login-box shadow-lg ${
          theme.color === "darkMode" && "logodark"
        }`}
      >
        <img src={logo} alt="logo" className={`login-box-logo`} />
        <p className={`text-preset-1 text-center mb-2`}>Reset Your Password</p>
        <p className={`text-preset-5 text-center`}>
          Choose a new password to secure your account.
        </p>

        <div className={`mt-4`}>
          <form
            className={`flex flex-col justify-center pt-6`}
            onSubmit={handleSubmit}
          >
            <label htmlFor="">New Password</label>
            <div className={`relative`}>
              <input
                type={showPassword ? "text" : "password"}
                required
                minLength={8}
                className={`rounded-8 px-4 py-3 border-neutral-300 border-2 mt-2 w-full hover:bg-neutral-50 cursor-pointer`}
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <img
                src={showPassword ? showPasswordIcon : hidePasswordIcon}
                alt="hide password svg"
                className={` w-5 h-5 absolute top-1/2 right-2 mx-4 text-center cursor-pointer`}
                onClick={onShowPassword}
              />
            </div>
            <p className={`text-neutral-600 text-preset-6 mt-1`}>
              <img src={infoIcon} alt="info" className={`h-3 inline`} /> At
              least 8 characters
            </p>
            <div className={`flex items-end mt-6`}>
              <label htmlFor="">Confirm New Password</label>
            </div>
            <div className={`relative`}>
              <input
                type={showCPassword ? "text" : "password"}
                min={8}
                className={`rounded-8 px-4 py-3 border-neutral-300 border-2 mt-2 w-full hover:bg-neutral-50 cursor-pointer focus:border-double focus:border-4 focus:border-neutral-950`}
                value={data.confirmPassword}
                onChange={(e) =>
                  setData({ ...data, confirmPassword: e.target.value })
                }
              />
              <img
                src={showCPassword ? showPasswordIcon : hidePasswordIcon}
                alt="hide password svg"
                className={` w-5 h-5 absolute top-1/2 right-2 mx-4 text-center cursor-pointer`}
                onClick={onShowCPassword}
              />
            </div>
            {data.confirmPassword !== data.password && (
              <p className={`text-red-500 text-preset-6 mt-1`}>
                <img src={infoIcon} alt="info" className={`h-3 inline`} />{" "}
                Password no-conform
              </p>
            )}

            <button
              type="submit"
              className={`bg-primary-one px-4 py-3 mt-4 rounded-8 text-white cursor-pointer`}
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
      {showModal === true && spinner}
    </div>
  );
}
