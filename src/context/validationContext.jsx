import { createContext, useState } from "react";

export const ValidationContext = createContext();

export default function ValidationProvider({ children }) {
  const [activeModal, setActiveModal] = useState("");
  const [showValid, setShowValid] = useState("");

  return (
    <ValidationContext.Provider value={{activeModal,setActiveModal, showValid, setShowValid}}>
      {children}
    </ValidationContext.Provider>
  );
}
