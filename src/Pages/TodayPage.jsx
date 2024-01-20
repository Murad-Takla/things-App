import React, { useContext, useReducer } from 'react';
import AddTodo from '../Components/AddTodo';
import TodoList from '../Components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import { TodosContext } from '../contexts/TodosContext';
import IconToday from '../Icons/IconToday';


const TodayPage = () => {


    const {dispatch} =  useContext(TodosContext)
    
  
  
    
    return (
        <>


            <div className='flex mb-4 items-center space-x-2'>
                <IconToday></IconToday>
                <h2 className='font-bold'>Today</h2>
            </div>
            
            <TodoList  ></TodoList>

            <div className='fixed right-6 bottom-6'>

                <button 
                
                onClick={ () => dispatch({type : "ADD TODO" , title : ''}) }
                className=' bg-blue-600 rounded-full p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill='white'><path d="M23 11H13V1.001A.982.982 0 0 0 12.021 0c-.553 0-1 .447-1 .999L11.012 11H1a1 1 0 1 0 0 2h10.01L11 22.999A1 1 0 0 0 11.998 24h.001c.552 0 1-.447 1.001-.999V13h10a1 1 0 0 0 0-2z"></path>
                    </svg>
                </button>
            </div>



        </>
    );
};

export default TodayPage;
