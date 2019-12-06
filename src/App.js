import React, { Component } from "react";
import './App.css';
import  Button  from './components/Button';
import { Input } from './components/Input';
import { render } from '@testing-library/react';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }
  addToInput = val => {
    this.setState({ input: this.state.input + val});
  };

  clearInput = val => {
    this.setState({ input: ""});
  };

  clearLastInput = () => {
    console.log(this.state.input)
    console.log(this.state.input.length)
    this.setState({ input: this.state.input.toString().substring(0, this.state.input.toString().length - 1)});
  };

  calculate = () => {
    var input = "";
    try {
      input=math.evaluate(this.state.input);
    } catch (error) {
      input="Error";
    }
    this.setState({ input: input});
  };

  render(){
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} >1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.calculate}>=</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.clearInput}>Clear</Button>
            <Button handleClick={this.clearLastInput}>CE</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;