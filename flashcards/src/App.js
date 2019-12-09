import React, {Component} from 'react';
import './App.css';
import Nav from './Nav.js';
import Flashcards from './Flashcards.js';
import Buttons from './Buttons.js';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      listItems: [],
      currIndex: 0,
      clicks: 0
    }

    this.clickNext = this.clickNext.bind(this);
    this.clickPrevious = this.clickPrevious.bind(this);
    this.incrementItem = this.incrementItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);
  }

  incrementItem = () => {
    this.setState({clicks: this.state.clicks +1});
  }

  decreaseItem = () => {
    this.setState({clicks: this.state.clicks -1});
  }
  

  clickNext(){
    if (this.state.currIndex === 24) {
        this.setState({currIndex:0});
    }else{
        this.setState({currIndex: this.state.currIndex +1});
    }
    // this.setState({currIndex: this.state.currIndex +1})
}

clickPrevious(){
    if (this.state.currIndex === 0) {
        this.setState({ currIndex: 24});
    }else{
        this.setState({currIndex: this.state.currIndex-1})
    }
    // this.setState({currIndex: this.state.currIndex -1})
}


  render(){
    return (
      <div className="browser-container">
        <Nav />
        <Flashcards currIndex = {this.state.currIndex} />
        
        <Buttons clickNext={this.clickNext} clickPrevious={this.clickPrevious}/>
      </div>
    )
  }
}


//I need to figure out how to render the counter in the upper right corner.
//It needs to be tied to the index ID so like .id/25