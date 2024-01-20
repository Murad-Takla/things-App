import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';


export const TodosContext = createContext('')


export const TodoProvider = ({ children }) => {

    const reducer = (state, action) => {

        if (action.type === 'ADD TODO') {
            const newState = [...state]
            newState.push({
                id: uuidv4(),
                title: action.title,
                notes: "",
                subtask: [],
                tags: [],
                date: new Date(),
                deadline: ''

            })
            return newState
        }

        if (action.type === "UPDATE TODO") {
            return state.map((todo) => {
                console.log(action)
                if (todo.id === action.id) {

                    return ({
                        id: action.id,
                        title: action.title,
                        notes: action.notes,
                        subtask: [],
                        tags: [],
                        date: new Date(),
                        deadline: ''

                    })
                }
                return todo

            })

        }

        if (action.type === 'ADD_SUBTASK') {
            return state.map((todo) => {
                if (todo.id === action.id) {
                    const newSubTask = [...todo.subtask, {id: uuidv4() , isCompleted : false , value : action.value}]

                    return {

                        ...todo,
                        
                        subtask: newSubTask
                    }
                }

                return todo
            })
        }

        if(action.type === 'UPDATE SUBTASK'){

            return state.map((todo) => {
                // console.log(todo)

                console.log(action.isCompleted)
                if (todo.subtask.id === action.id) {
                    const newSubTask = [...todo.subtask, {id:action.subtaskId , isCompleted : action.isCompleted , value : action.value}]

                    return {
                        ...todo,    
                        subtask: newSubTask
                    }
                }

                return todo
            })
        }

        return state
    }

    const [todos, dispatch] = useReducer(reducer, [
        {
            id: uuidv4(),
            title: "Learn HTML",
            notes: "",
            subtask: [],
            tags: [],
            date: new Date("2024-01-20"),
            deadline: ''
        },
        {
            id: uuidv4(),
            title: "Learn CSS",
            notes: "",
            subtask: [],
            tags: [],
            date: new Date(),
            deadline: ''
        },
        {
            id: uuidv4(),
            title: "Learn JS",
            notes: "",
            subtask: [],
            tags: [],
            date: new Date(),
            deadline: ''

        }

    ])

    const checkToday = ({ date }) => {

        const todayDate = new Date()

        const todoYear = date.getFullYear()
        const todoMonth = date.getMonth() + 1    /// month is always 0 based Index (so you to add '1' after month if you want proper month using Date() )
        const todoDay = date.getDate()

        return (
            todayDate.getFullYear() === todoYear &&
            todayDate.getMonth() + 1 === todoMonth &&
            todayDate.getDate() === todoDay
        )

    }
    const todayTodo = todos.filter(checkToday)


    // console.log(todos)
    return (
        <TodosContext.Provider value={{ todayTodo, todos, dispatch }}>
            {children}
        </TodosContext.Provider>
    );

}


