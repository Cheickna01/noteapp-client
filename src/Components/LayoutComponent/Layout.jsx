import { Outlet, useNavigate } from "react-router-dom";
import Header from "../HeaderComponent/Header";
import SideBar from "../SideBarComponent/SideBar";
import MenuBar from "../MenuBarComponent/MenuBar";
import Toast from "../ToastComponent/Toast";
import { useContext, useState, useEffect } from "react";
import { NoteContext } from "../../context/noteContext";
import { createPortal } from "react-dom";
import DeleteModal from "../ModalsComponents/DeleteModal";
import ArchiveModal from "../ModalsComponents/ArchiveModal";
import { ValidationContext } from "../../context/validationContext";
import { auth } from "../../API/auth";
import { UserContext } from "../../context/userContext";
import { fetchNotes } from "../../API/fetchNotes";
import { ThemeContext } from "../../context/themeContext";
import LogoutModal from "../ModalsComponents/LogoutModal";
export default function Layout() {
  const navigate = useNavigate();
  const [actived, setActived] = useState("all");
  const { setNotes, filters, setAllTags } = useContext(NoteContext);
  const { activeModal, showValid } = useContext(ValidationContext);
  const { theme } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext);
  const deleteModal = createPortal(<DeleteModal />, document.body);
  const archiveModal = createPortal(<ArchiveModal />, document.body);
  const logoutModal = createPortal(<LogoutModal />, document.body);

  useEffect(() => {
    auth(setUser, navigate);
  }, []);

  useEffect(() => {
    fetchNotes(setNotes, filters, setAllTags);
  }, [filters]);
  return (
    <div className={`flex h-screen ${theme.font}`}>
      <>
        <SideBar actived={actived} setActived={setActived} />
      </>
      <div
        className={`flex-grow-1 ${
          theme.color === "darkMode" && "bg-neutral-950 text-white"
        }`}
      >
        <Header />
        <div className={`flex lg:h-[90%] h-[80%] relative`}>
          {showValid && <Toast setActived={setActived} />}
          <Outlet />
        </div>
        <MenuBar />
      </div>
      {activeModal === "delete" && deleteModal}
      {activeModal === "archive" && archiveModal}
      {activeModal === "logout" && logoutModal}
    </div>
  );
}
