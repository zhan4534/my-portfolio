import { useTheme } from "../ThemeContext";

function Hero() {
    const { theme } = useTheme();
    return (
      <section id="home" className="h-screen flex flex-col items-center justify-center">
        <div className="max-w-4xl text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">Hi, I’m Jacob Zhang</h1>
            <p className="text-xl sm:text-2xl max-w-xl mb-6">
            I’m an aspiring engineer looking to solve real-world problems with code.
            </p>
            <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-6 rounded-full transition duration-300"
            style={{ background: theme.accent }}
            >
            View My Work
            </a>
        </div>
      </section>
    );
  }
  
  export default Hero;
  