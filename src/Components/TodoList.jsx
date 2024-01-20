import React, { useContext, useState } from 'react';
import IconNotes from '../Icons/IconNotes';
import IconPlus from '../Icons/IconPlus';
import { TodosContext } from '../contexts/TodosContext';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {


    const { todayTodo } = useContext(TodosContext)

    return (
        <div>
            {
                todayTodo.map((todo) => {
                    return (
                        <Todo todo={todo} key={todo.id} ></Todo>
                    );
                })
            }
        </div>
    );
};


const Todo = ({ todo }) => {


    const title = todo.title

    const [isExpanded, setIsExpanded] = useState(false)

    if (isExpanded === false) {
        return (
            <div
                onDoubleClick={() => { setIsExpanded(!isExpanded) }}
            >
                <input type="checkbox" className='scale-125' name='name' id='id' />

                {
                    title.length === 0 ? <span value='New todo '
                        className="ml-1 text-gray-400"
                    >New todo</span> : <span className='ml-1 text-gray-600'>{todo.title}</span>
                }
            </div>
        );
    }
    return <TodoExpanded todo={todo} setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
}


const TodoExpanded = ({ todo, setIsExpanded, isExpanded }) => {

    const [title, setTitle] = useState(todo.title)
    const [notes, setNotes] = useState(todo.notes)





    const { dispatch } = useContext(TodosContext)




    return (
        <div className="bg-white rounded-md shadow-md p-4 mb-2">

            {/* Title */}

            <div className="flex items-center py-2 border-b">
                <input className="scale-125" type="checkbox" name="name" id="id" />
                <input
                    defaultValue={title}

                    onChange={(e) => {
                        setTitle(e.target.value)
                        dispatch({ type: "UPDATE TODO", id: todo.id, title: e.target.value })
                    }}
                    className="border-none focus:outline-none ml-2"
                    placeholder="New To-Do"
                    type="text"
                    aria-autocomplete="list"
                />
                <button
                    onClick={() => setIsExpanded(false)}
                    className='border px-1 rounded font-medium'>Collapse</button>
            </div>


            {/* Notes */}

            <div className="flex items-center py-2 border-b">

                <IconNotes width={15} height={15}></IconNotes>
                <input

                    defaultValue={todo.notes}
                    className="border-none focus:outline-none ml-2 text-sm"
                    placeholder="Notes"
                    type="text"
                    onChange={(e) => {
                        dispatch({ type: "UPDATE TODO", id: todo.id, title: title, notes: e.target.value })
                    }}

                />
            </div>

            {/* SubTasks */}


            <div className='mb-2'>
                <ul>
                    {
                        todo.subtask.map((sb, idx) =>{
                            return (
                            <li key={idx} className='text-sm text-gray-400'>
                               
                              <button 
                              onClick={()=>{
                                //   console.log(sb.id)
                                //   console.log(sb.isCompleted)
                                  dispatch({
                                    type : "UPDATE SUBTASK",
                                    todoId : todo.id,
                                    subtaskId : sb.id,
                                    isCompleted : !sb.isCompleted,
                                    
                                })
                              }}
                              className='w-[10px] h-[10px] border rounded-full border-gray-400'></button>
                                <span> <input className='border-none focus:outline-none ml-2 text-sm' type="text" defaultValue={sb.value} /></span>
                               
                            </li>
                            )
                        }
                            
                        )
                    }
                </ul>
            </div>
            <div className="flex items-center py-2 border-b">

                <IconPlus width={16} ></IconPlus>
                <ul className="mb-4">
                </ul>
                <div className="flex items-center">
                    <input
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                dispatch({
                                    type: 'ADD_SUBTASK',
                                    id: todo.id,
                                    value: e.target.value
                                })
                                e.target.value = ''
                            }
                        }}
                        className="border-none focus:outline-none ml-2 text-sm"
                        placeholder="New Sub Task"
                        type="text"
                    />
                </div>
            </div>

            {/* Add Tags */}

            <div className="flex items-center py-2 border-b">

                <input
                    className="border-none focus:outline-none ml-2 text-base"
                    placeholder="Add Tags"
                    type="text"
                />
            </div>

            {/* Set When */}

            <div className="flex items-center py-2 border-b">

                <input
                    className="border-none focus:outline-none ml-2 text-sm placeholder:text-gray-300"
                    placeholder="Set When"
                    type="text"
                />
            </div>

            {/* Inbox */}

            <div className="flex items-center py-2 border-b">

                <input
                    className="border-none focus:outline-none ml-2"
                    placeholder="Inbox"
                    type="text"
                />
            </div>

            {/* Add deadline  */}

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