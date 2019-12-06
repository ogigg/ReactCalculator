import React, { Component } from "react";
import './Button.css';
import { isNumber } from 'util';

class Button extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hover: false
      };
    }


    getButtonFunction = val => {
        if (!isNaN(val)) {
            return "standard";
        }
        else if(val === 'Clear' || val === 'CE'){
            return "clear";
        }
        else{
            return "functional";
        }
    }


    toggleHover = () =>{
        this.setState ({hover : !this.state.hover});
        console.log("hover")
    }
    isHover = () =>{
        console.log("isHover")
        return this.state.hover;
        
    }
    render(){
        return (
        <div className={`button ${this.getButtonFunction(this.props.children)} 
        ${this.isHover() ? "hover" : null }`} 
        onClick={() => this.props.handleClick(this.props.children)}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        >
            {this.props.children}
        </div>)
    }
}
export default Button;