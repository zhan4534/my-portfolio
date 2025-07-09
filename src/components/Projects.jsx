// src/components/Projects.jsx
import { useTheme } from "../ThemeContext";

const projects = [
    {
      title: "This Site!",
      description: "A React-based portfolio. Click About on the navbar to learn more.",
      tech: ["React", "Javascript", "TailwindCSS"],
      links: [
        { label: "GitHub", url: "https://github.com/zhan4534/my-portfolio" },
      ],
    },
    {
      title: "Global Filter Image Classifier",
      description: "An image classifier model using a global filter layer.",
      tech: ["Python", "PyTorch", "Google Colab"],
      links: [
        { label: "GitHub", url: "https://github.com/zhan4534/ECE570-code-submission" },
        { label: "Paper", url: "/ece570_paper.pdf"},
      ],
    },
    {
      title: "Refreshable Braille Display",
      description: "A Braille display that can change its display based on receiving text inputs from any source, such as through a camera or app.",
      tech: ["KiCad", "STM32", "C"],
      links: [
        { label: "Design Document", url: "/Team24_FinalDesignDocument.pdf" },
      ],
    },
    {
      title: "Speech to Text Code Editor",
      description: "A just for fun code editor that can write and run python using only speech to text and Open AI client.",
      tech: ["Python", "Tkinter", "Open AI"],
      links: [
        { label: "Github", url: "https://github.com/zhan4534/stt-code-editor" },
      ],
    },
    // Add more projects here!
  ];
  
  function darkenColor(hex, amount = 10) {
    let [r, g, b] = hex
      .replace("#", "")
      .match(/.{2}/g)
      .map((c) => parseInt(c, 16));
  
    r = Math.max(0,r - amount);
    g = Math.max(0,g - amount);
    b = Math.max(0,b - amount);
  
    return `rgb(${r}, ${g}, ${b})`;
  }

  function Projects() {
    const {theme} = useTheme();
    const darkerBackground = darkenColor(theme.background, 30);
    return (
      <section id="projects" className="py-20 px-6" style={{background:darkerBackground}}>
        <h2 className="text-4xl font-bold text-center mb-12" style={{color:theme.text}}>Projects</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8" style={{color:theme.text}}>
          {projects.map((project, index) => (
            <div key={index} className="rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300" style={{background:theme.background}}>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-2 py-1 rounded-full"
                    style={{color:theme.text,background:theme.accent}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.links.map((link,i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-medium"
                    style={{color:theme.text}}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  