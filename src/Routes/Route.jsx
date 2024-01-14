import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import TodayPage from '../Pages/TodayPage';
import AnytimePage from '../Pages/AnytimePage';
import SomedayPage from '../Pages/SomedayPage';
import InboxPage from '../Pages/InboxPage';
import TrashPage from '../Pages/TrashPage';
import UpcomingPage from '../Pages/UpcomingPage';

import LogbookPage from '../Pages/LogbookPage';

const Route = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element : <Main></Main>,
            children : [
               
                {
                    path : '/',
                    element : <InboxPage></InboxPage>
                },
                {
                    path : '/today',
                    element : <TodayPage></TodayPage>
                },
                {
                    path : '/anytime',
                    element : <AnytimePage></AnytimePage>
                },
                {
                    path : '/someday',
                    element : <SomedayPage></SomedayPage>
                },
                {
                    path : '/trash',
                    element : <TrashPage></TrashPage>
                },
                {
                    path : '/upcoming',
                    element : <UpcomingPage></UpcomingPage>
                },
                {
                    path : '/today',
                    element : <TodayPage></TodayPage>
                },
                {
                    path : '/logbook',
                    element : <LogbookPage></LogbookPage>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;

