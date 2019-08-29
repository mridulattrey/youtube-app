import React from "react";
import "./App.css";

export default class RecommendComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allvideos: [], fn: null };
  }
  componentWillReceiveProps(props) {
    this.setState({ allvideos: this.props.allvideos, fn: this.props.setSrc });
  }
  render() {
    return (
      <div className="recommended-div">
        <InsideRecommended
          allvideos={this.props.allvideos}
          setSrc={this.state.fn}
        />
      </div>
    );
  }
}

class InsideRecommended extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(item) {
    //alert("yes clicked")
    this.props.setSrc(item);
  }

  render() {
    this.div = (
      <div className="div-inside-recommended">
        {this.props.allvideos.map(item => {
          return (
            <div
              className="thumbnail-div"
              onClick={() => {
                this.handleClick(item);
              }}
            >
              <img src={item.snippet.thumbnails.default.url} />
              <p id="thumbnail-video-title">
                <p>{item.snippet.title}</p>
                <p>{item.snippet.channelTitle}</p>
              </p>
            </div>
          );
        })}
      </div>
    );
    return this.div;
  }
}
