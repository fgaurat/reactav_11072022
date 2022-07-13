import React from 'react'
import { Todo } from '../../core/Todo'

export interface TodoListProps {
    todos: Todo[]
}

function TodoList({ todos }: TodoListProps) {


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
                {todos.map((todo:Todo) =>
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed?"ok":"ko"}</td>
                        <td></td>
                    </tr>    
                )}
                </tbody>
            </table>
    )
}

export default TodoList
