import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';


export const TodosContext =  createContext('')


export const TodoProvider = ({children}) =>{

    const reducer = (state, action) => {
       

        if (action.type === 'ADD TODO') {
            const newState = [...state]
            newState.push({
                id: uuidv4(),
                title: action.title
            })
            return newState
        }
        
      
        if (action.type ===  "UPDATE TODO"){
            return state.map((todo) =>  {
                if(todo.id === action.id){
                    return ({
                        id : action.id,
                        title : action.title
                    })
                }
                return todo

            })
                
        }



        return state

    }

    const [todos, dispatch] = useReducer(reducer, [
        {
            id: uuidv4(),
            title: "Learn HTML"
        },
        {
            id: uuidv4(),
            title: "Learn CSS"
        },
        {
            id: uuidv4(),
            title: "Learn JS"
        }

    ])

     

   console.log(todos)

    return (
        <TodosContext.Provider value={{todos , dispatch}}>
            {children}
        </TodosContext.Provider>
    );

}


