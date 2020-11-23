import React, { Component } from "react";

var img1 = require("./assets/e_jones_pic.png");
var img2 = require("./assets/d_ring.png");
var img3 = require("./assets/c_ring.png");
var img4 = require("./assets/b_ring.png");
var img5 = require("./assets/a_raven.png");
export class Jones extends Component {
  render() {
    return (
      <div className="jones-container">
        <img alt="" className="mandala rotating2" src={img1.default} />
        <img alt="" className="mandala rotating_r" src={img2.default} />
        <img alt="" className="mandala rotating" src={img3.default} />
        <img alt="" className="mandala rotating_r2" src={img4.default} />
        <img alt="" className="mandala rotating2" src={img5.default} />
      </div>
    );
  }
}
export default Jones;
