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

      
    ]//todos je kao neki niz staticnih objekata
  }

  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id ===id){
        todo.compleated = !todo.compleated
      }
      return todo;
    })
  });
  }
  
  delTodo = (id) =>{
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
    
        <Todos todos={this.state.todos} markComplete={this.markComplete} 
        delTodo={this.delTodo}
        /> 
      </div>
    ); //pozivam todos i saljem, cak i saljem fju markComplete, logicno ne treba props
  }
}

export default App;
