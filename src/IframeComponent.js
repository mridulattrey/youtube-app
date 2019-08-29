import React from "react";
import "./App.css";


export default class IframeComponent extends React.Component {
  render() {
    return (
      <div className="video-div">
        <iframe
          id="video-frame"
          width="820"
          height="485"
          src={this.props.src}
        />
       
      </div>
    );
  }
}
