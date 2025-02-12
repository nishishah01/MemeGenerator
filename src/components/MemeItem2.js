import React, { Component } from "react";
import { connect } from "react-redux";
import { createMeme } from "../actions";

class MemeItem extends Component{
    constructor(){
        super();
        this.state = {
            hovered: false  //the meme name is inside the img
        }
    }
    postMeme(){
        const {text0,text1} =this.props;
        const memeObj={template_id:this.props.meme.id,text0,text1};
        this.props.createMeme(memeObj);
        
    }
    render(){
        return(
        <div className={this.state.hovered?"meme-img darken-img":"meme-img"}
            onMouseEnter={()=>this.setState({hovered:true})}
            onMouseLeave={()=>this.setState({hovered:false})}
            onClick={()=>this.postMeme()}
            >
            <img className="meme-img"
             src={this.props.meme.url}
              alt={this.props.meme.name} 
              />
            <p className={this.state.hovered?"meme-txt":"no-txt"}>
                {this.props.meme.name}</p>
        </div>
        )
    }
}
export default connect(null,{createMeme})(MemeItem);