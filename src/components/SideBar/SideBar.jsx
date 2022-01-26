import React from 'react';
import { NavLink } from 'react-router-dom';
import UserCard from '../user/UserCard';

import style from './SideBar.module.css';

const SideBar = ({url}) => {
    return (
        <aside className={style.sidebar}>
            <UserCard name='Miguel Anguel' typeUser='Lector'/>
            <div className={style.sidebar_menu}>
                <ul>
                    <li><NavLink exact to={url}><i className='bx bxs-home'></i><span>Home</span></NavLink></li>
                    <li><NavLink exact to={`${url}/search`}><i className='bx bxs-search-alt-2' ></i><span>Search</span></NavLink></li>
                    <li><NavLink exact to={`${url}/reading`}><i className='bx bx-library'></i><span>Reading Now</span></NavLink></li>
                    <li><NavLink exact to={`${url}/perfil`}><i className='bx bxs-user'></i><span>Perfil</span></NavLink></li>
                    <li>
                        <button>
                            <i className='bx bxs-exit' ></i>
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                developed by Fernando Tolentino 
            </div>
        </aside>
    )
};

export default SideBar;
