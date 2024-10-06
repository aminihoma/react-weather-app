import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="tehran" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/homa-amini-ba327296"
            target="_blank"
            rel="noreferrer"
          >
            Homa Amini
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/aminihoma/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
