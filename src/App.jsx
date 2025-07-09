import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
import { defaultTheme } from "./ThemeDefaults";

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : defaultTheme;
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style ={{
        backgroundColor: theme.background,
        color: theme.text,
        fontFamily: theme.font,
      }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
