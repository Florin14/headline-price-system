import "./App.css";
import pricesSystemImg from "./assets/prices-system.png";

function App() {
  return (
    <div className="app-container">
      <img
        src={pricesSystemImg}
        alt="Headline Price System"
        className="background-image"
      />
      {/* You can add content here that will appear on top of the image */}
    </div>
  );
}

export default App;
