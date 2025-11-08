import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme}>
      <h1>{theme === "dark" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}</h1>
      <button onClick={toggleTheme}>
        Cambiar a {theme === "dark" ? "Claro ☀️" : "Oscuro 🌙"}
      </button>
    </div>
  );
}

export default App;
