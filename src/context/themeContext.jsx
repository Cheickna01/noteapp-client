import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : { color: "lightMode", font: "sans" };
  });
  const [color, setColor] = useState("");
  const [font, setFont] = useState("");

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, color, setColor,font, setFont }}>
      {children}
    </ThemeContext.Provider>
  );
}
