import "./App.css";
import News from "./News";

function App() {
  let heading = "News";
  return (
    <div className="container">
      <header>
        <h1 className="heading">{heading}</h1>
      </header>
      <News />
    </div>
  );
}

export default App;
