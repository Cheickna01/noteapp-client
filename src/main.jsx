import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./context/noteContext.jsx";
import ValidationProvider from "./context/validationContext.jsx";
import UserProvider from "./context/userContext.jsx";
import ThemeProvider from "./context/themeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <UserProvider>
      <NoteProvider>
        <ValidationProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ValidationProvider>
      </NoteProvider>
    </UserProvider>
  </ThemeProvider>
);
