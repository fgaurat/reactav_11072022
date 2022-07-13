import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DAO } from '../core/DAO'
import { Todo } from '../core/Todo'
import { TodoDAO } from '../core/TodoDAO'


export interface TodoState {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


export const saveTodo = createAsyncThunk(
    'todos/saveTodo',
    async (todo: Todo, thunkAPI) => {
        const dao: DAO = new TodoDAO()
        await dao.save(todo)
        thunkAPI.dispatch(fetchTodos())

    }
)

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async () => {
        const dao: DAO = new TodoDAO()
        const todos: Todo[] = await dao.findAll()
        return todos
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (todo: Todo, thunkAPI) => {
        const dao: DAO = new TodoDAO()
        await dao.delete(todo)
        thunkAPI.dispatch(fetchTodos())
    }
)

const initialState: TodoState[] = []

export const todoSlice = createSlice({
    name: 'todos',
    initialState,

    reducers: {
        // deleteTodo: (state, action: PayloadAction<Todo>) => {
        //     return state.filter((todo: Todo) => todo.id != action.payload.id)
        // },
    },
    extraReducers: {
        [fetchTodos.fulfilled.type]: (state, action) => {
            
            return action.payload
        },
        // [deleteTodo.fulfilled.type]: (state, action) => {
        //     return state.filter((todo: Todo) => todo.id != action.payload.id)
        // },
    },
})

// Action creators are generated for each case reducer function
// export const { deleteTodo } = todoSlice.actions

export default todoSlice.reducer