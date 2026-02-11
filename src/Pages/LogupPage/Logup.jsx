import googleIcon from "../../assets/images/icon-google.svg";
import infoIcon from "../../assets/images/icon-info.svg";
import logo from "../../assets/images/logo.svg";
import logo2 from "../../assets/images/logo.png";
import googleIcon2 from "../../assets/images/Google.png";
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { logup } from "../../API/logup";
import { ThemeContext } from "../../context/themeContext";
import Spinner from "../../Components/Modals/Spinner";
import { createPortal } from "react-dom";
export default function Logup() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState("");
  const [showModal, setShowModal] = useState("");
  const { theme } = useContext(ThemeContext);
  function onShowPassword() {
    setShow(!show);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowModal(true)
    logup(data,setShowModal);
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
        {theme.color === "darkMode" ? (
          <img src={logo2} alt="logo-dark" className="login-box-logo" />
        ) : (
          <img src={logo} alt="logo" className={`login-box-logo`} />
        )}
        <p className={`text-preset-1 text-center mb-2`}>Create Your Account</p>
        <p className={`text-preset-5 text-center`}>
          Sign up to start organizing your notes and boost your productivity.
        </p>

        <div className={`mt-4`}>
          <form
            className={`flex flex-col justify-center pt-6`}
            onSubmit={handleSubmit}
          >
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              required
              className={`rounded-8 px-4 py-3 border-neutral-300 border-2 mt-2 mb-1.5 hover:bg-neutral-50 cursor-pointer focus:border-double focus:border-4 focus:border-neutral-950`}
              placeholder="email@exemple.com"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />

            <div className={`flex items-end`}>
              <label htmlFor="">Password</label>
            </div>
            <div className={`relative`}>
              <input
                type={show ? "text" : "password"}
                required
                minLength={8}
                className={`rounded-8 px-4 py-3 border-neutral-300 border-2 mt-2 w-full hover:bg-neutral-50 cursor-pointer focus:border-double focus:border-4 focus:border-neutral-950`}
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              {show ? (
                <i
                  className="fa-regular fa-eye absolute top-1/2 right-2 mx-4 text-center cursor-pointer fa-x"
                  onClick={onShowPassword}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-eye-slash absolute top-1/2 right-2 mx-4 text-center cursor-pointer fa-x"
                  onClick={onShowPassword}
                ></i>
              )}
            </div>
            <p className={`text-neutral-600 text-preset-6 mt-1`}>
              <img src={infoIcon} alt="info" className={`h-3 inline`} /> At
              least 8 characters
            </p>

            <button
              type="submit"
              className={`bg-primary-one px-4 py-3 mt-4 rounded-8 text-white cursor-pointer`}
            >
              Sign up
            </button>
          </form>
        </div>
        <span className={`bg-neutral-200 h-0.5 w-full block mt-4 mb-4`}></span>
        <p className={`mt-4 mb-4 text-center text-preset-5`}>Or log in with</p>
        <button
          className={`w-full cursor-pointer flex justify-center gap-4 rounded-12 border-neutral-200 border-2 h-12 items-center hover:bg-neutral-50`}
        >
          {theme.color === "darkMode" ? (
            <img src={googleIcon2} alt="" />
          ) : (
            <img src={googleIcon} alt="google" className={``} />
          )}
          <p className={`text-neutral-950`}>Google</p>
        </button>
        <span className={`bg-neutral-200 h-0.5 w-full block mt-4 mb-4`}></span>
        <p className={`text-preset-5 text-center`}>
          Alredy have an account?{" "}
          <span
            className={`text-preset-5 font-bold inline cursor-pointer hover:underline hover:text-blue-700`}
          >
            <Link to={"/"}>Login</Link>
          </span>
        </p>
      </div>
      <ToastContainer />
      {showModal === true && spinner}
    </div>
  );
}
