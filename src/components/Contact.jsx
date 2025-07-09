// src/components/Contact.jsx
import { useTheme } from "../ThemeContext";

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

function Contact() {
    const { theme } = useTheme();
    const darkerBackground = darkenColor(theme.background,30);
    return (
      <section id="contact" className="py-20 px-6" style={{background:darkerBackground}}>
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form
          action="https://formspree.io/f/xrbkjnqv"  // Replace this
          method="POST"
          className="max-w-2xl mx-auto space-y-6 p-8 rounded-2xl shadow-md"
          style={{background:theme.background}}
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{borderColor:theme.text}}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{borderColor:theme.text}}
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{borderColor:theme.text}}
            ></textarea>
          </div>
          <button
            type="submit"
            className="hover:bg-blue-700 font-semibold py-2 px-6 rounded-full transition duration-300"
            style={{background:theme.accent}}
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  