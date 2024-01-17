
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navlink = ({label , className , href , icon, isActive}) => {

   

    
   
 
    
        return (
            <Link 

            to={href}>
                <div className={`flex gap-2 items-center hover:bg-gray-200 px-2 py-1 rounded-sm cursor-pointer ${isActive ? 'bg-gray-200' : ''}`}>
                    {icon}
                    <p>{label}</p>
                </div>
            </Link>

        )
     
   
};

export default Navlink;