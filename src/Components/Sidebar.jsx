import React from 'react';
import IconInbox from "../Icons/IconInbox"
import IconToday from "../Icons/IconToday"
import IconAnytime from "../Icons/IconAnytime"
import IconUpcoming from "../Icons/IconUpcoming"
import IconSomeday from "../Icons/IconSomeday"
import IconLogbook from "../Icons/IconLogbook"
import IconTrash from "../Icons/IconTrash"
import { Link } from 'react-router-dom';

const links = [
    {
        label: "Inbox",
        icon: <IconInbox width={18}></IconInbox>,
        href: "/",
        className: "mb-4"
    },
    {
        label: "Today",
        icon: <IconToday width={18}></IconToday>,
        href: "/today"
    },
    {
        label: "Anytime",
        icon: <IconAnytime width={18}></IconAnytime>,
        href: "/anytime",
        
    },
    {
        label: "Upcoming",
        icon: <IconUpcoming width={18}></IconUpcoming>,
        href: "/upcoming",
        
    },
    {
        label: "Someday",
        icon: <IconSomeday width={18}></IconSomeday>,
        href: "/someday",
        className: "mb-4"
    },
    {
        label: "Logbook",
        icon: <IconLogbook width={18}></IconLogbook>,
        href: "/logbook",
        
    },
    {
        label: "Trash",
        icon: <IconTrash width={18}></IconTrash>,
        href: "/trash",
      
    },
]
const Sidebar = () => {





    const Navlink = ({ label, icon, href }) => {

        return (
            <Link to={href}>
                <div className='flex gap-2 items-center hover:bg-gray-200 px-2 py-1 rounded-sm cursor-pointer'>
                    {icon}
                    <p>{label}</p>
                </div>
            </Link>

        )
    }


    return (
        <div className="w-56 bg-zinc-50 h-screen border-r flex flex-col">
            <ul className="px-5 py-5">
                {links.map((link, i) => {
                    return (
                        <li key={i} className={link.className}>
                            <Navlink {...link}></Navlink>
                        </li>
                    );
                })}
            </ul>
            <div className="mt-auto">
                <button className="border-t border-gray-300 hover:bg-zinc-300 text-gray-500 font-medium py-2 rounded-sm w-full flex gap-2 items-center px-7">
                    {/* <img className="w-3 h-3" src="./assets/img/plus.svg" alt="Plus" /> */}
                    <span className="font-medium text-sm">Add Project</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;