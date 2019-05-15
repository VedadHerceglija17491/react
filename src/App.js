import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
  
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        compleated: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        compleated: false
      },
      {
        id: uuid.v4(),
        title: 'Metting with boss',
        compleated: false
      }

      
    ]//todos je kao neki niz staticnih objekata
  }
    //setState vjerovatno znaci da ce se mjenjati stanje
  markComplete = (id) =>{ //id mora poslat da se zna koji se brise
    this.setState({ todos: this.state.todos.map(todo =>{ //map prolazi kroz sve u nizu
      if(todo.id ===id){
        todo.compleated = !todo.compleated
      }
      return todo;
    })
  });
  }
  //ovu fju saljem dalje da mogu mjenjat stanje preko nj (brisanje, nejasano kako radi)
  delTodo = (id) =>{
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  //dodavanje todo na listu

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      compleated: false
    }
  this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    
    return (
      <Router>
      <div className="App">
        <div className="container"> 
          <Header /> 
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} 
              delTodo={this.delTodo}
              /> 
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
      </Router>
    ); //pozivam todos i saljem, cak i saljem  fju markComplete, logicno ne treba props
  }
}

export default App;
