import ReactDOM from "react-dom/client";
import {useContext} from "react";
import {ThemeContext, ThemeProvider} from "./theme_context"; // 1
import profileImage from "./profile.svg";

const container = document.getElementById("root") || document.body;
const root = ReactDOM.createRoot(container);
root.render(<App />);

function App() {
  return (
    <ThemeProvider>
      <Card />
      <Button />
    </ThemeProvider>
  );
}

function Card() {
  const {theme} = useContext(ThemeContext);
  const className = `card-${theme}`;

  return (
    <div id="profile-card" className={className}>
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  const {theme} = useContext(ThemeContext);
  const className = `avatar-${theme}`;

  return (
    <div className="header">
      <div id="avatar" className={className}>
        <img src={profileImage} alt="Profile" />
      </div>
    </div>
  );
}

function Body() {
  const {theme} = useContext(ThemeContext);
  const className = `body-${theme}`;

  return (
    <div id="body" className={className}>
      <h1>ninjawanko</h1>
      <p>Bio: I'm a software developer.</p>
    </div>
  );
}

function Button() {
  const {theme, toggleTheme} = useContext(ThemeContext); // 1
  const className = `button-${theme}`;

  return (
    <button
      type="button"
      id="button"
      className={className}
      onClick={toggleTheme}
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
