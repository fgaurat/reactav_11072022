       
          
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Todo } from '../../core/Todo'
import HOCCompletedTodoList from '../HOCCompletedTodoList'


function TodoListFetch() {
  
    
    const [data,setData] = useState<Todo[]>([])

    useEffect(() => {
  
      ( async () =>{
        const data = await fetch(process.env.REACT_APP_TODOS_URL!).then(r=>r.json())
        setData(data)
    
      })()
    }, [])
  return (
    <>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>completed</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((todo:Todo) =>
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
    </>
  )
}

export default TodoListFetch