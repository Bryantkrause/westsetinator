import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/react-vis/dist/style.css";
import Example from "../src/pages/Example"

function App() {
  return (
    <div>
      <Router>
      <Route exact path="/">
    <Example/>
      </Route>
      </Router>
    </div>
  );
}

export default App;
