import React from 'react';
import ReactDOM from 'react-dom';
class Pad extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentDisplay: 0,
      history: [{
        currentDisplay: 0,
      }]
    }
    this.handleClick = this.handleClick.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  
  handleClick(event){
    const currentVal = (this.state.currentDisplay == 0) ? event.target.value : this.state.currentDisplay + event.target.value;
    this.setState({
      currentDisplay: currentVal
    })
  }
  
  resetState(){
    this.setState({
      currentDisplay: 0,
      history: [{
        currentDisplay: 0,
      }]
    })
  }
  
  render(){
    return(
      <div class="bg-dark p-2">
        <div>
          <div id="display">{this.state.currentDisplay}</div>
        </div>
        <div>
          <button id="clear" onClick={this.resetState}>C</button>
        </div>
        <div class="d-flex">
          <button id="seven" onClick={this.handleClick} value="7">7</button>
          <button id="eight" onClick={this.handleClick} value="8">8</button>
          <button id="nine" onClick={this.handleClick} value="9">9</button>
          <button id="add"  value="+">+</button>
        </div>
        <div class="d-flex">
          <button id="four" onClick={this.handleClick} value="4">4</button>
          <button id="five" onClick={this.handleClick} value="5">5</button>
          <button id="six" onClick={this.handleClick} value="6">6</button>
          <button id="substract" value="-">-</button>
        </div>
        <div class="d-flex">
          <button id="one" onClick={this.handleClick} value="1">1</button>
          <button id="two" onClick={this.handleClick} value="2">2</button>
          <button id="three" onClick={this.handleClick} value="3">3</button>
          <button id="multiply" value="*">x</button>
        </div>
        <div class="d-flex">
          <button id="zero" onClick={this.handleClick} value="4">0</button>
          <button id="decimal" value=".">.</button>
          <button id="equals" value="=">=</button>
          <button id="divide" value="+">/</button>
        </div>
      </div>
    )
  }
}

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  
  render(){
    return(
      <div class="w-100 h-100 d-flex justify-content-center align-items-center">
        <div class="border border-secondary">
          <div>
            <Pad />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("app-display"));
