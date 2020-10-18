import React, { Component } from "react";
import image from "./images";

export class Jones extends Component {
  render() {
    return (
      <div className="jones-container">
        <img className="mandala rotating" src={image.i1} />
        <img className="mandala rotating_r" src={image.i2} />
        <img className="mandala rotating" src={image.i3} />
        <img className="mandala rotating_r" src={image.i4} />
        <img className="mandala rotating" src={image.i5} />
      </div>
    );
  }
}
export default Jones;
