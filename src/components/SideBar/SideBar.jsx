import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import UserCard from '../user/UserCard';
import style from './SideBar.module.css';

const SideBar = ({url}) => {
    const { user, logout } = useAuth0();

    return (
        <aside className={style.sidebar}>
            <UserCard name={user.nickname} typeUser='Lector' img={user.picture}/>
            <div className={style.sidebar_menu}>
                <ul>
                    <li><NavLink exact to={url}><i className='bx bxs-home'></i><span>Home</span></NavLink></li>
                    <li><NavLink exact to={`${url}/search`}><i className='bx bxs-search-alt-2' ></i><span>Search</span></NavLink></li>
                    <li><NavLink exact to={`${url}/reading`}><i className='bx bx-library'></i><span>Reading Now</span></NavLink></li>
                    <li><NavLink exact to={`${url}/perfil`}><i className='bx bxs-user'></i><span>Perfil</span></NavLink></li>
                    <li>
                        <button onClick={logout}>
                            <i className='bx bxs-exit' ></i>
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className={style.me}>
                <h4>Fernando Tolentino Santiago</h4>
                <span>Developer</span>
                <ul>
                    <li><a href="https://www.linkedin.com/in/fernandotolentinosa/" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin-square'></i></a></li>
                    <li><a href="https://github.com/ethanial1" target="_blank" rel="noreferrer"><i className='bx bxl-github'></i></a></li>
                </ul>
            </div>
        </aside>
    )
};

export default SideBar;
