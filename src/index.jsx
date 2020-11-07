import React, { useState } from "react";
import ReactDOM from "react-dom";

import RainbowSpinner from "./components/RainbowSpinner";
import Jones from "./components/Jones";
import "./styles/app.scss";

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
        {view === "yes" ? <audio loop="true" autoplay="true" hidden src="https://cdn.glitch.com/e2af77e5-5038-45be-9cb5-f60e2fa146cb%2Fstrawberry_edit.mp4?v=1602996276868"></audio> : null}
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
