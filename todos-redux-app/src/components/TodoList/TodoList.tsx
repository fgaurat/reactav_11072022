import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Todo } from '../../core/Todo'
import { deleteTodo,fetchTodos } from '../../features/todoSlice'

interface TodoListProps {
    todos: Todo[]
}

function TodoList() {

    const todos = useAppSelector((state) => state.todoList)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(fetchTodos())
    }, [])


    const doDelete = (todo: Todo) => {
        dispatch(deleteTodo(todo))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>userId</th>
                    <th>title</th>
                    <th>completed</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo: Todo) =>
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed}</td>
                        <td>
                            <button onClick={()  => doDelete(todo)} className="btn btn-danger">delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default TodoList
