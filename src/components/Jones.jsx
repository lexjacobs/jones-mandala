import React, { Component } from "react";
import image from "./images";

console.log(image);

export class Jones extends Component {
  render() {
    return (
      <ul>
        <img src={image.1} className="rotating1"/>
        <img src={image.2} className="rotating2"/>
        <img src={image.3} className="rotating3"/>
        <img src={image.4} className="rotating4"/>
        <img src={image.5} className="rotating5"/>
      </ul>
    );
  }
}
export default Jones;
