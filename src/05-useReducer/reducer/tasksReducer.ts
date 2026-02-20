import * as z from "zod";
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'DELETE_TODO'; payload: number }
    | { type: 'TOGGLE_TODO'; payload: number }


const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean()
})

const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number(),
})

export const getTasksInitialState = (): TaskState => {
    const localStorageState = localStorage.getItem('tasks-state')

    const emptyReturn = {
        todos: [],
        length: 0,
        completed: 0,
        pending: 0
    }
    if (!localStorageState) return emptyReturn

    const result = TaskStateSchema.safeParse(JSON.parse(localStorageState))

    if (result.error) {
        return emptyReturn
    }
    return result.data
}

export const taskReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {
    const completedLength = (todos: Todo[]) => {
        return todos.filter(todo => todo.completed).length;
    }

    const pendingLength = (todos: Todo[]) => {
        return todos.filter(todo => !todo.completed).length;
    }

    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            }

            const currentTodos = [...state.todos, newTodo]
            return {
                ...state,
                todos: currentTodos,
                length: currentTodos.length,
                completed: completedLength(currentTodos),
                pending: pendingLength(currentTodos)
            };
        }
        case 'DELETE_TODO': {
            const undeletedTodos = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos: undeletedTodos,
                length: undeletedTodos.length,
                completed: completedLength(undeletedTodos),
                pending: pendingLength(undeletedTodos)
            };
        }
        case 'TOGGLE_TODO': {
            const updatedTodos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })

            return {
                ...state,
                todos: updatedTodos,
                length: updatedTodos.length,
                completed: completedLength(updatedTodos),
                pending: pendingLength(updatedTodos)
            };
        }

        default:
            return state
    }
}