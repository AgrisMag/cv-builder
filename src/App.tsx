import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/contact">
          <h1>Contact</h1>
        </Route>
      </div>
    </Router>
  );
}

export default App;
