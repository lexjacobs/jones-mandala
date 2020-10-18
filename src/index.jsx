import React, { useState } from "react";
import ReactDOM from "react-dom";

import RainbowSpinner from "./components/RainbowSpinner";
import Jones from "./components/Jones";
import "./styles/app.scss";

var AudioChooser = props => {
  return (
    <div>
      hello
      <button>Audio</button>
      <button>No Audio</button>
    </div>
  );
};

var App = props => {
  const [view, setView] = useState("choose");

  if (view === "choose") {
    return (
      <div>
        <AudioChooser />
      </div>
    );
  } else {
    return (
      <div>
        <Jones />
        <RainbowSpinner />
      </div>
    );
  }
};

const element = <App />;
ReactDOM.render(element, document.getElementById("app"));
