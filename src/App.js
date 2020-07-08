import React, { Component } from 'react';
import  { CardList }  from './components/card-list/card-list.component.jsx';
import { SearchField } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    //before using 'this', you have to call super()
    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <SearchField placeholder="Search monsters" handleChange={ e => this.setState({ searchField: e.target.value}) } />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }

}

export default App;
