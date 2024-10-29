import React, { FC, useEffect, useState } from 'react';
import styles from './Sidebar.module.css';

import { NavLink, useLocation } from 'react-router-dom';
import HomeIcon from '../../partials/icons/HomeIcon';
import CreateEventIcon from '../../partials/icons/CreateEventIcon';
import ContactUsIcon from '../../partials/icons/ContactUsIcon';

type MenuItem = {link: string, text: string, icon: React.FC<{isActive: boolean}>};

const MENU: MenuItem[] = [
    {link: '/', text: 'Home', icon: HomeIcon},
    {link: '/create-event', text: 'Create Event', icon: CreateEventIcon},
    {link: '/contact-us', text: 'Contact Us', icon: ContactUsIcon},
];

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
    return (
        <div data-testid="Sidebar" className='w-72 h-screen sticky top-0 border-r border-r-gray-200 py-6'>
            <div className='flex flex-col gap-3 h-full'>
                <header className='px-6 py-2'>
                    <h2>Snapnet Events</h2>
                </header>
                <ul className='flex flex-col gap-1 px-2'>
                    {
                        MENU.map(menuItem => {
                            return (
                                <li key={menuItem.link}>
                                    <MenuItem item={menuItem} />
                                </li>
                            );
                        })
                    }
                </ul>
                <div className='mt-auto flex flex-col gap-[10px]'>
                </div>
            </div>
        </div>
    );
}


function MenuItem({item}: {item: MenuItem}) {
    const [isActive, setIsActive] = useState(false);
    const {pathname} = useLocation();
    const Icon = item.icon;

    useEffect(() => {
        setIsActive(pathname === item.link);
    }, [pathname, item.link]);

    return (
        <NavLink to={item.link} className={`flex gap-3 px-4 py-3 items-center rounded-[4px] ${isActive ? 'bg-[#FFECE5]' : ''}`}>
            <Icon isActive={isActive} />
            <span className='text-grey-900 text-sm'>{item.text}</span>
        </NavLink>
    );
}

export default Sidebar;
