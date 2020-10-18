import React, { useState } from "react";
import ReactDOM from "react-dom";

import RainbowSpinner from "./components/RainbowSpinner";
import Jones from "./components/Jones";
import "./styles/app.scss";

var AudioChooser = props => {
  return (
    <div>
      <button onClick={() => props.handleChoice('yes')}>Audio</button>
      <button onClick={() => props.handleChoice('no')}>No Audio</button>
    </div>
  );
};

var AudioTag = props => (
  <audio controls src=""></audio>
)

var App = props => {
  const [view, setView] = useState(null);

  if (!view) {
    return (
      <div>
        <AudioChooser handleChoice={setView} />
      </div>
    );
  } else {
    return (
      <div>
        {view === "yes" ? <audio controls src=""></audio> : null}
        <Jones />
        <RainbowSpinner />
      </div>
    );
  }
};

const element = <App />;
ReactDOM.render(element, document.getElementById("app"));
