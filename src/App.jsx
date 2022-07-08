import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/home/Home";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <div className="App">
      <Loader />
      <Home />
    </div>
  );
}

export default App;
