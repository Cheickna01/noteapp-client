import AllNotes from "../AllNotes/AllNotes";
import NotesSideBar from "../../Components/SideBarAllNotesComponent/NotesSideBar";
import NoteDetail from "../../Components/NoteDetailComponent/NoteDetail";
import ActionBar from "../../Components/ActionSideBarComponent/ActionBar";
import { useContext } from "react";
import { NoteContext } from "../../context/noteContext";

export default function Home() {
  const { notes } = useContext(NoteContext);
  return (
    <>
      <NotesSideBar />
      {notes.length > 0 && (
        <>
          <NoteDetail />
          <ActionBar />
        </>
      )}
      <AllNotes />
    </>
  );
}
