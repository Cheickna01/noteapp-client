import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Logup from "../LogupPage/Logup";
import ForgottenPassword from "../ForgottenPasswordPage/ForgottenPassword";
import ResetPassword from "../ResetPasswordPage/ResetPassword";
import Login from "../LoginPage/Login";
import Layout from "../../Components/LayoutComponent/Layout";
import AllNotes from "../AllNotes/AllNotes";
import NotePage from "../NotePage/NotePage";
import Tags from "../TagsPage/Tags";
import NewNote from "../NewNote/NewNote";
import Settings from "../SettingsPage/Settings";
import FontTheme from "../../Components/SettingsComponents/FontTheme";
import MobileColors from "../../Components/SettingsComponents/MobileColors";
import Params from "../../Components/SettingsComponents/Params";
import MobileFontTheme from "../../Components/SettingsComponents/MobileFontTheme";
import MobileChangePassword from "../../Components/SettingsComponents/MobileChangePassword";
export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/logup" element={<Logup />} />
      <Route path="/forget-password" element={<ForgottenPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="note/:noteId" element={<NotePage />} />
        <Route path="tags" element={<Tags />} />
        <Route path="tags/tag/:id" element={<AllNotes />} />
        <Route path="new-note" element={<NewNote />} />
        <Route path="settings" element={<Settings />}>
          <Route index element={<Params />} />
          <Route path="themes" element={<MobileColors />} />
          <Route path="fonts" element={<MobileFontTheme />} />
          <Route path="change-password" element={<MobileChangePassword />} />
        </Route>
      </Route>
    </Routes>
  );
}
