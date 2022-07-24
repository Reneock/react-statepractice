import React, { Component } from 'react';

class CounterClassApp extends Component {
  constructor(props){
    super()
    this.state = {number: 0}

  }

  Subtract=()=>{
    this.setState({number:this.state.number - 1});
  }
  render() {
    return (
      <div>
        <h1>Count : {this.state.number}</h1>
        <button onClick={()=>{this.setState({number:this.state.number + 1});}}>Increment</button>
        <button onClick={this.Subtract}>Decrement</button>
      </div>
    );
  }
}

export default CounterClassApp;

