import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='flex'>
            <Sidebar></Sidebar>
            <div className="flex-1 py-14 px-20">
            <Outlet></Outlet>
            </div>

    </div>
      
    );
};

export default Main;