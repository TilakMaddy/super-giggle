import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    //before using 'this', you have to call super()
    this.state = {
      people: [
        { name: 'Tilak' },
        { name : 'Mario' },
        { name : 'Ken' },
      ]
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        {
          this.state.people.map(person => {
            return <h1 key={Math.random()}> {person.name} </h1>
          })
        }
      </div>
    );
  }

}

export default App;
