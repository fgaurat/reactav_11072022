import { DAO } from "./DAO";
import { Todo } from "./Todo";


export class TodoDAO implements DAO{

    findAll(): Promise<Todo[]> {
        const url = process.env.REACT_APP_TODOS_URL as RequestInfo
        return fetch(url).then(response => response.json())
    }

}