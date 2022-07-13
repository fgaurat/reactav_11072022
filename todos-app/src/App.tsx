import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoDAO } from './core/TodoDAO';
import { Todo } from './core/Todo';
//import TodoList from './components/TodoList';



const TodoList = React.lazy(() => import('./components/TodoList')); // Chargé à la demande

function App() {



  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    (async () => {
      const data = new TodoDAO()
      const todos = await data.findAll()
      setTodos(todos)
    })()


  }, [])

  return (
    <div className="container">
      <h1>App</h1>
      <TodoList todos={todos}></TodoList>
      
    </div>
  );
}

export default App;


// TodoList => PascalCase, UpperCamelCase
// todoList => camelCase
// todo_list => snake_case
// todo-list => kebab-case
// background-color => style.backgroundColor