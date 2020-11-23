import React, { useState } from "react";
import ReactDOM from "react-dom";

import RainbowSpinner from "./components/RainbowSpinner";
import Jones from "./components/Jones";
import "./styles/app.scss";
var song = require("./components/assets/strawberry_edit.mp4");

var AudioChooser = props => {
  return (
    <div className="chooser">
      <button onClick={() => props.handleChoice('yes')}>Audio</button>
      <button onClick={() => props.handleChoice('no')}>No Audio</button>
    </div>
  );
};

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
        {view === "yes" ? <audio loop={true} autoPlay={true} hidden src={song.default}></audio> : null}
        <div className="outer">
          <Jones />
          <RainbowSpinner />
        </div>
      </div>
    );
  }
};

const element = <App />;
ReactDOM.render(element, document.getElementById("app"));
