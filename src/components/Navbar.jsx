import { useTheme } from "../ThemeContext";
import { NavLink } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function Navbar({ onToggleThemeEditor, showEditor}) {
  const { theme } = useTheme();
  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold"></h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <NavLink to="/#home" className="hover:text-blue-600 transition" style={{color: theme.text}}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-blue-600 transition" style={{color: theme.text}}>
              About
            </NavLink>
          </li>
          <li>
            <Link to="/#projects" className="hover:text-blue-600 transition" style={{color: theme.text}}>Projects</Link>
          </li>
          <li>
            <Link to="/#resume" className="hover:text-blue-600 transition" style={{color: theme.text}}>Resume</Link>
          </li>
          <li>
            <Link to="/#contact" className="hover:text-blue-600 transition" style={{color: theme.text}}>Contact</Link>
          </li>
          <li>
            <button
              onClick={onToggleThemeEditor}
              className="bg-transparent border-none text-xl hover:text-blue-600 transition"
              title="Customize Theme"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                font: "inherit",
                cursor: "pointer",
                color: theme.text
              }}
            >
              ⚙️
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
