import React, { useContext, useState } from 'react';
import IconNotes from '../Icons/IconNotes';
import { TodosContext } from '../contexts/TodosContext';

const TodoList = () => {


    const {todos} = useContext(TodosContext)

    return (
        <div>
            {
                todos.map((todo ) => {
                    return (
                        <Todo todo={todo} key={todo.id} ></Todo>
                    );
                })
            }
        </div>
    );
};


const Todo = ({todo}) => {

    

    const [isExpanded, setIsExpanded] = useState(false)

    if (isExpanded === false) {
        return (
            <div
                onDoubleClick={() => { setIsExpanded(!isExpanded) }}
            >
                <input type="checkbox" className='scale-125' name='name' id='id' />
                <span className='ml-1 text-gray-600'>{todo.title}</span>
            </div>
        );
    }
    return <TodoExpanded  todo = {todo} setIsExpanded = {setIsExpanded} isExpanded ={isExpanded}/>
}


const TodoExpanded = ({todo , setIsExpanded , isExpanded }) => {

    const [title , setTitle] =  useState (todo.title)

    const {dispatch } = useContext(TodosContext)

   
   

    return (
        <div className="bg-white rounded-md shadow-md p-4 mb-2">


            <div className="flex items-center py-2 border-b">
                <input className="scale-125" type="checkbox" name="name" id="id" />
              
                    

                <input
                  value={title}
                 onChange={(e) => { setTitle(e.target.value) }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            dispatch({ type: "UPDATE TODO",   id : todo.id ,  title })
                        }
                    }}
                    className="border-none focus:outline-none ml-2"
                    placeholder="New To-Do"
                    type="text"
                    aria-autocomplete="list"
                />
                <button 
                onClick={ () =>setIsExpanded(false)}
                className='border px-1 rounded font-medium'>Collapse</button>
            </div>
            <div className="flex items-center py-2 border-b">

                <IconNotes width={15}></IconNotes>
                <input
                    className="border-none focus:outline-none ml-2 text-sm"
                    placeholder="Notes"
                    type="text"
                />
            </div>
            <div className="py-2 border-b">
                <ul className="mb-4">
                </ul>
                <div className="flex items-center">
                    <input
                        className="border-none focus:outline-none ml-2 text-sm"
                        placeholder="New Sub Task"
                        type="text"
                    />
                </div>
            </div>
            <div className="flex items-center py-2 border-b">

                <input
                    className="border-none focus:outline-none ml-2 text-base"
                    placeholder="Add Tags"
                    type="text"
                />
            </div>
            <div className="flex items-center py-2 border-b">

                <input
                    className="border-none focus:outline-none ml-2 text-sm placeholder:text-gray-300"
                    placeholder="Set When"
                    type="text"
                />
            </div>
            <div className="flex items-center py-2 border-b">

                <input
                    className="border-none focus:outline-none ml-2"
                    placeholder="Inbox"
                    type="text"
                />
            </div>
            <div className="flex items-center py-2">
                <input
                    className="border-none focus:outline-none ml-2 text-sm"
                    placeholder="Add Deadline"
                    type="text"
                />
            </div>
        </div>
    );
}

export default TodoList;