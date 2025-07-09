import Navbar from "../components/Navbar";
import ThemeEditor from "../components/ThemeEditor";
import { useTheme } from "../ThemeContext";
import { useEffect, useState } from "react";

function About() {
    const {theme,setTheme} = useTheme();

    const [showEditor, setShowEditor] = useState(false);

    useEffect(() => {
        localStorage.setItem("theme",JSON.stringify(theme));
      }, [theme]);

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
      <main className="pt-20 min-h-screen" style={{ backgroundColor: theme.background, color: theme.text }}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-6" style={{ color: theme.text }}>About this site</h1>
          <p>
            This website serves as a portfolio to show off some of the projects that I've worked on, 
            but beyond that, it's also my personal playground to learn and experiment with my web 
            development skills. As a result, some aspects of the website may not make sense, whether 
            by being an experiment, or just a plain mistake, and I appreciate any feedback on 
            anything nonsensical that can help me to continue to learn and improve.
          <br></br><br></br>
            Current features include a navbar, projects and corresponding links, multiple pages, 
            theme customization, and a contact form.
          </p>
        </div>
      </main>
    </>
  );
}

export default About;
