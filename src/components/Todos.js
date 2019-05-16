import React, { Component } from 'react';
import TodoItem from './TodoItem'; //moramo ga uvest jer ga koristimo
import PropTypes from 'prop-types';



class Todos extends Component {


  render() {
    
    return this.props.todos.map((todo) => (
     <TodoItem key={todo.id} todo={todo} 
     markComplete={this.props.markComplete} 

    
     /> //ovo saljem todoitem i uporedo ga pozivam, preko propsa saljem sa veceg levela 
    ));
  }
}

Todos.propTypes={
  todos: PropTypes.array.isRequired
}

export default Todos;
