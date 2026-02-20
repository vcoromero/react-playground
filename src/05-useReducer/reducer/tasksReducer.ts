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

export const getTasksInitialState = (): TaskState => {

    const localStorageState = localStorage.getItem('tasks-state')
    if (!localStorageState) {
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0
        }
    }
    return JSON.parse(localStorageState)
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