import React from "react";
import "./App.css";

export default class VideoTitleComponent extends React.Component{
constructor(props){
    super(props)
    this.state={
        color:"white",
        snippet:"",
        
    }
    this.changeColor=this.changeColor.bind(this)
}


componentDidUpdate(){
if(this.state.snippet==""||this.state.snippet!=this.props.snippet)
this.setState({snippet:this.props.snippet})
}
changeColor(){
    this.setState({color:(this.state.color=="white")?"red":"white"})
}
render(){
    return(
        <div className="video-caption-div">
        <span id="title">{this.state.snippet.title}</span>
        <span id="heart" style={{color:this.state.color}} onClick={this.changeColor}>&#10084;</span>
        <p>{this.state.snippet.channelTitle}</p>
      </div>
    )
}

}