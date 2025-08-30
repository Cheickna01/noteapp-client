import { createContext, useEffect, useState } from "react";

export const NoteContext = createContext();

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState("");
  const [note, setNote] = useState("");
  const [allTags, setAllTags] = useState("");
  const [noteID, setNoteID] = useState("");
  const [filters, setFilters] = useState({
    archives: false,
    tags: "",
  });
  const [search, setSearch] = useState("");
  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        noteID,
        setNoteID,
        filters,
        setFilters,
        allTags,
        setAllTags,
        search,
        setSearch,
        note,
        setNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
