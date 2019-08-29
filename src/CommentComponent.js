import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css"

export default class CommentComponent extends React.Component{
    constructor(){
        super()
        this.state={
            value1:"",
            value2:"",
            show:0,
            commentusrers:[],
            commentsdetails:[]
        }
        this.handleCancel=this.handleCancel.bind(this)
        this.handleChange1=this.handleChange1.bind(this)
        this.handleChange2=this.handleChange2.bind(this)
        this.addComment=this.addComment.bind(this)
    }
    handleChange1(e){
        this.setState({value1:e.target.value}) 
    }

    handleChange2(e){ 
        this.setState({value2:e.target.value})
    }
    handleCancel(e){
        alert(this.state.value1+this.state.value2)
        this.setState({value1:"",value2:""})
    }

addComment(){
   // alert("Comment by : - "+this.state.value1+"\n"+"Comment : -"+this.state.value2)
  this.setState({show:1})
  this.state.commentusrers.push(this.state.value1);
  this.state.commentsdetails.push(this.state.value2);
}

    render(){
        return(<div className="comment-div">
            <p id="comment-para">Comments</p>
            <div className="comment-input-div">
                <input className="comment-input" value={this.state.value1} type="text" placeholder="UserName" onChange={this.handleChange1}></input>
                <input className="comment-input" id="comment-content" type="text" placeholder="Comment Here" value={this.state.value2} onChange={this.handleChange2}></input>
            </div>
            <span id="comment-button-span">
                <button className="comment-buttons" onClick={this.addComment}>Comment</button>
                <button className="comment-buttons" onClick={this.handleCancel}>Cancel</button>
            </span>
            {(this.state.show==0)?null:<CommentComponent2 user={this.state.commentusrers} details={this.state.commentsdetails}/>}
        </div>)
    }
}


class CommentComponent2 extends React.Component{
    

    constructor(props){
       // alert("im called")
        super(props)
        this.state={
user:"",
comment:""
        }
    }

    render(){
        return<>{<p id="comments-section">{this.props.user.map((item,i)=><><p  id="commentbyuser-para"><i className="fa fa-user"></i>{item}</p><p id="comment-detail">{this.props.details[i]}</p></>)}</p>}</>
        
    }
}
export {CommentComponent2}