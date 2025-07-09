import { defaultTheme } from "../ThemeDefaults";
import { useTheme } from "../ThemeContext";

function ThemeEditor({ theme, setTheme }) {
    return (
      <div className="p-4 border-b border-gray-300 flex flex-col gap-4 text-black">
        <label>
          Background Color:
          <input
            type="color"
            value={theme.background}
            onChange={(e) => setTheme({ ...theme, background: e.target.value })}
          />
        </label>
        <label>
          Text Color:
          <input
            type="color"
            value={theme.text}
            onChange={(e) => setTheme({ ...theme, text: e.target.value })}
          />
        </label>
        <label>
          Accent Color:
          <input
            type="color"
            value={theme.accent}
            onChange={(e) => setTheme({ ...theme, accent: e.target.value })}
          />
        </label>
        <label>
          Font:
          <select
            value={theme.font}
            onChange={(e) => setTheme({ ...theme, font: e.target.value })}
          >
            <option value="system-ui">System</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
            <option value="'Comic Sans MS', cursive">Comic Sans</option>
          </select>
        </label>
        <button onClick={() => setTheme(defaultTheme)}>
            Reset Theme
        </button>
      </div>
    );
  }
  
  export default ThemeEditor;
  