import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import ThemeEditor from "../components/ThemeEditor";
import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import { useLocation } from "react-router-dom";


function Home() {
    const {theme,setTheme} = useTheme();

    const [showEditor, setShowEditor] = useState(false);

    useEffect(() => {
        localStorage.setItem("theme",JSON.stringify(theme));
      }, [theme]);
    
    const location = useLocation();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const id = hash.replace("#", "");
          const el = document.getElementById(id);
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: "smooth" });
            }, 100); // slight delay for layout to load
          }
        }
      }, [location]);
      
  return (
    <>
        <Navbar
          onToggleThemeEditor={() => setShowEditor((prev) => !prev)}
          showEditor={showEditor}
        />

        {showEditor && (
          <div className="fixed top-16 right-4 bg-white rounded shadow-lg z-40 border">
            <ThemeEditor theme={theme} setTheme={setTheme} />
          </div>
        )}
        <main>
            <Hero />
            <Projects />
            <Resume />
            <Contact />
        </main>
    </>
  );
}

export default Home;
