import logo from "../../assets/images/logo.svg";
import logo2 from "../../assets/images/logo.png";
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { forgotPassword } from "../../API/forgotPassword";
import { ThemeContext } from "../../context/themeContext";
export default function ForgottenPassword() {
  const [data, setData] = useState({
    email: "",
  });
  const { theme } = useContext(ThemeContext);
  function handleSubmit(e) {
    e.preventDefault();
    forgotPassword(data);
  }
  return (
    <div
      className={`flex items-center justify-center h-screen ${theme.font} bg-neutral-100 ${
        theme.color === "darkMode" && "bg-neutral-700"
      }`}
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
        <p className={`text-preset-1 text-center mb-2`}>
          Forgotten your password?
        </p>
        <p className={`text-preset-5 text-center`}>
          Enter your email below, and we’ll send you a link to reset it.
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

            <button
              type="submit"
              className={`bg-primary-one px-4 py-3 mt-4 rounded-8 text-white cursor-pointer`}
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
