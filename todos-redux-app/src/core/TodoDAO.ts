import { DAO } from "./DAO";
import { Todo } from "./Todo";


export class TodoDAO implements DAO{
    delete(todo: Todo): Promise<Response> {
        const url = `${process.env.REACT_APP_TODOS_URL}/${todo.id}` as RequestInfo

        return fetch(url,{method:'DELETE'})
    }

    findAll(): Promise<Todo[]> {
        const url = process.env.REACT_APP_TODOS_URL as RequestInfo
        return fetch(url).then(response => response.json())
    }

    save(todo:Todo):Promise<Todo>{
        const url = process.env.REACT_APP_TODOS_URL as RequestInfo
        return fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(todo)
        }).then(response=>response.json())
    }
    

}