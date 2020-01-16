import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Entry from "./components/Entry";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Entry />} />
        <Route exact path="/home" render={() => <Homepage />} />
      </Switch>
    </div>
  );
}

export default App;
