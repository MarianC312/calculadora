import React from 'react';
import ReactDOM from 'react-dom';

class Visor extends Reac.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }
  
  render(){
    return (
      <div className="w-100" value={this.state.value} />
    )
  }
}

class Button extends React.Component {
  render(){
    return (
      <button id={props.id} onClick={props.action} className={props.className} value={props.value} />
    )
  }
}

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return  (
      <div className="container text-center">
        
      </div>
    )
  }
}


ReactDOM.render(
  <Main title="React + Bootstrap" text="There has been an alarming increase in the number of things you know absolutely nothing about."></Main>,
  document.getElementById('react-app')
);
