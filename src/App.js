import logo from "./logo.svg";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "To-Do Blog ";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
