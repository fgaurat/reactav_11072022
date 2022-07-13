import React from 'react';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoForm from './components/TodoForm';
import TodoFinalForm from './components/TodoFinalForm';
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col">
        <TodoList></TodoList>

      </div>
      <div className="col">
        <TodoForm></TodoForm>
        <TodoFinalForm></TodoFinalForm>
      </div>
      </div>
    </div>
  );
}

export default App;
