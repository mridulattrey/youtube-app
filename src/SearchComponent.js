import React from "react";
import "./App.css";

export default class SearchComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {allvideos: [],value:"upgrad",error:""};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
       
        fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q="+this.state.value+"&type=video&videoDefinition=high&key=AIzaSyDC4BFk9nVJ9_ySZ9L07B3E9KuTaa5xyeY")
        .then(res => res.json())
        .then(
          (result) => {
           // console.log(result)
          this.setState({allvideos:result.items})
          this.props.setSrc(this.state.allvideos)  
        },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error:"error"
            });
          }
        )
        
      }
    componentDidMount(){
      this.handleSubmit()
    }
      render() {
        return (
          <div className="search-bar">
              <input type="text"  value={this.state.value} onChange={this.handleChange} />
            <button type="submit" id="search-button" onClick={this.handleSubmit}>Search</button>
          </div>
        );
      }
    }