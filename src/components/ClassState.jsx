import React, {Component} from 'react';

class ClassState extends Component {
  constructor(props){
    super()
    this.state ={name:"Barbara", age:20}

  }

  UpdateName=()=>{
    this.setState({name:"Irene", age : this.state.age + 10});
  }

  render(){
    return(
      <div>
      <h1>Hello Codetrain Students</h1>
      <h1 onClick={this.UpdateName}>
      Welcome {this.state.name} i am {this.state.age} years</h1>
      </div>
    );
  }
}

export default ClassState;