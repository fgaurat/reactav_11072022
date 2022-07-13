import { Todo } from "./Todo";

export interface DAO{

    findAll():Promise<any[]>;
    delete(todo:Todo):Promise<Response>;
    save(todo:Todo):Promise<Todo>;
}