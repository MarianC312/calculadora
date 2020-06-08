import React from 'react';
import ReactDOM from 'react-dom';
class Pad extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentDisplay: 0,
      result: 0,
      history: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }
  
  handleResult(){
    let currentResult = 0;
    let h = this.state.history;
    h.map((data,i) => {
      console.log(data);
      if(isNaN(data)){
        if(data == "*" || data == "/"){
          console.log(
            h[i - 1] + data + h[i + 1]
          );
        }
      }
    })
  }
  
  handleClick(event){
    let value = event.target.value;
    if(isNaN(value)){
      if(event.target.id == "equals"){
        
      }else{
        this.setState({
          currentDisplay: 0,
          history: [...this.state.history, this.state.currentDisplay, event.target.value]
        })
      }
    }else{
      let currentVal;
      if(this.state.currentDisplay == 0){
        currentVal = value;
      }else{
        currentVal = this.state.currentDisplay + value;
      }
      this.setState({
        currentDisplay: currentVal
      })
    }
  }
  
  resetState(){
    this.setState({
      currentDisplay: 0,
      history: []
    })
  }
  
  render(){
    //console.log(this.state.history);
    return(
      <div class="bg-dark p-2">
        <div id="history">
          {
            this.state.history.map((n) => n + " ")
          }
        </div>
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
          <button id="add" onClick={this.handleClick} value="+">+</button>
        </div>
        <div class="d-flex">
          <button id="four" onClick={this.handleClick} value="4">4</button>
          <button id="five" onClick={this.handleClick} value="5">5</button>
          <button id="six" onClick={this.handleClick} value="6">6</button>
          <button id="substract" onClick={this.handleClick} value="-">-</button>
        </div>
        <div class="d-flex">
          <button id="one" onClick={this.handleClick} value="1">1</button>
          <button id="two" onClick={this.handleClick} value="2">2</button>
          <button id="three" onClick={this.handleClick} value="3">3</button>
          <button id="multiply" onClick={this.handleClick} value="*">x</button>
        </div>
        <div class="d-flex">
          <button id="zero" onClick={this.handleClick} value="0">0</button>
          <button id="decimal" onClick={this.handleClick} value=".">.</button>
          <button id="equals" onClick={this.handleResult} value="=">=</button>
          <button id="divide" onClick={this.handleClick} value="/">/</button>
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
