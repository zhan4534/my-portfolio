// src/components/Resume.jsx
import { useTheme } from "../ThemeContext";

function Resume() {
    const {theme} = useTheme();
    return (
      <section className="py-20 text-center" id="resume" style={{background:theme.background}}>
        <h2 className="text-4xl font-bold mb-6">Resume</h2>
        <p className="mb-6 text-lg">
          Want to know more about my experience and skills?
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:bg-blue-700 font-semibold py-3 px-6 rounded-full transition duration-300"
          style={{background:theme.accent}}
        >
          View Resume (PDF)
        </a>
      </section>
    );
  }
  
  export default Resume;
  