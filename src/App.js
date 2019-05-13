import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        compleated: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        compleated: false
      },
      {
        id: 3,
        title: 'Metting with boss',
        compleated: false
      }

      
    ]
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
    
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
