import React from "react";
import "./App.css";
import SearchComponent from './SearchComponent'
import IframeComponent from './IframeComponent'
import RecommendComponent from './RecommendComponent'
import CommentComponent from './CommentComponent'
import VideoTitleComponent from './VideoTitleComponent'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      src:null,
      item:null,
      allvideos:[],
    }

this.setSrc=this.setSrc.bind(this)
this.onClickforRecommended=this.onClickforRecommended.bind(this)
  }

setSrc(searchedvideo){
  this.setState({src:`https://www.youtube.com/embed/${searchedvideo[0].id.videoId}?modestbranding=1`,allvideos:searchedvideo,item:searchedvideo[0].snippet})
  console.log(this.state.item)
  
}

onClickforRecommended(item){
  this.setState({src:`https://www.youtube.com/embed/${item.id.videoId}?modestbranding=1`,item:item.snippet})
}

render(){
  return (<>
    <SearchComponent setSrc={this.setSrc}/>
      <div className="main-div">
        <div className="comment-video-div">
        <IframeComponent src={this.state.src}/>
        <VideoTitleComponent snippet={this.state.item}/>
        <CommentComponent/>
        </div>
        <RecommendComponent allvideos={this.state.allvideos} setSrc={this.onClickforRecommended}/>
     </div>
  </>);
}}

export default App;
