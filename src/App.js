import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="starlight" />
        </main>
        <footer className="app-footer">
          Coded by Tara Walker &{" "}
          <a
            href="https://github.com/TaraWalk/dictionary-project"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}
