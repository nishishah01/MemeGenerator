import React, { Component } from 'react';
import { ControlLabel, Form, FormControl, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import "../styles/index.css";
import MemeItem from './MemeItem2';
class App extends Component{
    constructor(){
        super();
        this.state={
            memeLimit:10,
            text0: '',
            text1:''
        }; //it will show just 10 memes and then the rest will appear if you show show more
    }
    render() {
        return (
            <div>
                <h1>
                    Welcome to MemeCrafter
                </h1>
                <h4>
                    <i>Create Your Own Meme:</i>
                    </h4>
                    <Form inline>
                        <FormGroup>
                            <ControlLabel>TEXT 1</ControlLabel>{" "}<FormControl type="text" onChange={event=>this.setState({text0:event.target.value})}></FormControl>
                            {" "}
                            <ControlLabel>TEXT 2</ControlLabel>{" "}<FormControl type="text" onChange={event=>this.setState({text1:event.target.value})}></FormControl>
                        </FormGroup>
                    </Form>
                <div className='meme-container'>
                {
                    this.props.memes.slice(0,this.state.memeLimit).map((meme,index)=>{return(  //meme is our state and index is action
                         <MemeItem
                          key={index}
                           meme={meme}
                            text0={this.state.text0}
                             text1={this.state.text1}
                          
                          /> //it will display the names of the memes
                    )})//index is basically the key
                }
                </div>
                <div className="meme-button" onClick={()=>{this.setState({memeLimit:this.state.memeLimit+10})}}>Load 10 more memes</div> 
                
            </div>//setStatw mwthod is used to change the limit
        )
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps,null)(App);  //map the array to print thes memes
