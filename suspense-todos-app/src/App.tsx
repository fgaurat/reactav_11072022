import React,{useState,useEffect, Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './components/Spinner';
import { TodoDAO } from './core/TodoDAO';
import { Todo } from './core/Todo';
import HOCCompletedTodoList from './components/HOCCompletedTodoList';

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
      <Suspense fallback={<Spinner/>}>
        <TodoList todos={todos}></TodoList>
      </Suspense>
      
    </div>
  );
}

export default App;


// TodoList => PascalCase, UpperCamelCase
// todoList => camelCase
// todo_list => snake_case
// todo-list => kebab-case
// background-color => style.backgroundColor