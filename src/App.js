import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    //before using 'this', you have to call super()
    this.state = {
      string: 'Javascript is cool !'
    }
  }

  render() {
    return (
      <div className="maybe-cool">

      </div>
    );
  }

}

export default App;
