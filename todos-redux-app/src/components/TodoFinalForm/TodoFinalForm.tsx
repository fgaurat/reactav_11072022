

import React from 'react'
import { Form, Field } from 'react-final-form'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { saveTodo } from '../../features/todoSlice'
import { FormEvent } from 'react'
import { Todo } from '../../core/Todo'


function TodoFinalForm() {
    const [title,setTitle] = useState("")
    const [completed,setCompleted] = useState(false)
    const dispatch = useDispatch<AppDispatch>();


    const onSubmit = (todo:Todo) =>{
        console.log(todo)
        dispatch(saveTodo(todo))
    }


    const onValidate = (value:Todo) =>{
        const errors:any = {}
        if(!value.title){
            errors.title = "Required !!!"
        }

        return errors
    }


    return (
        <Form
        onSubmit={onSubmit}
        validate={onValidate}
        render={({ handleSubmit }) => (        
            <form onSubmit={handleSubmit}>
                <h1>TodoFinalForm</h1>
                <Field name="title" type="text">
                {({ input, meta }) => (
                <div className="mb-3">
                    <label htmlFor="todoTitle" className="form-label">Title</label>
                    <input {...input} type="text" className="form-control" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}

                </div>
                 )}
                </Field>


                <div className="mb-3 form-check">
                    
                    <Field name="completed" component='input' type='checkbox'/>

                    <label className="form-check-label" htmlFor="todoCheckedFinalForm">Completed</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )}
        />
    )
}

export default TodoFinalForm