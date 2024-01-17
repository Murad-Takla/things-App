import React, { useState } from 'react';


import IconNotes from './../Icons/IconNotes'

const AddTodo = ({dispatch}) => {
  
   // console.log(dispatch)
    const [title, setTitle]  = useState('')


    return (
        <div className="bg-white rounded-md shadow-md p-4 mb-2">

        
            <div className="flex items-center py-2 border-b">
                <input className="scale-125" type="checkbox" name="name" id="id" />
                <input
                   value={title}
                   onChange={(e) => {setTitle(e.target.value)}}
                   onKeyDown={(e)=> {
                    if(e.key === 'Enter'){
                        dispatch({type: "ADD TODO", title})
                    }
                   }}
                    className="border-none focus:outline-none ml-2"
                    placeholder="New To-Do"
                    type="text"
                    aria-autocomplete="list"
                />
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
};

export default AddTodo;