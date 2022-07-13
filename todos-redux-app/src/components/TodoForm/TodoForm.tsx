import React, { FormEvent,useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { saveTodo } from '../../features/todoSlice'

function TodoForm() {
    const dispatch = useAppDispatch()

    const [title, setTitle] = useState("")
    const [completed, setCompleted] = useState(false)


    const onSubmit = (event:FormEvent) =>{
        event.preventDefault()
        console.log({title,completed})
        dispatch(saveTodo({title,completed,userId:2}))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>

                <h1>TodoForm</h1>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Email address</label>
                    <input value={title} onChange={e => setTitle(e.target.value)}  type="text" className="form-control" id="title" placeholder="title" />
                </div>
                <div className="form-check">
                    <input checked={completed} onChange={e => setCompleted(e.target.checked)} className="form-check-input" type="checkbox" id="completed" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Done?
                </label>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Ok</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm
