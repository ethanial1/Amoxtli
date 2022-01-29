import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../assets/Logo1.png'
import st from './NavBar.module.css';

const NavBar = () => {
    const { user } = useAuth0();


    return (
        <nav className={st.nav_bar}>
            <div>
                <img src={logo} alt="amoxtli"/>
            </div>
            <div className={st.search_form}>
                <div className={st.input_group}>
                    <button>
                        <i className='bx bx-search-alt' ></i>
                    </button>
                    <input type="text" placeholder="Search" />
                </div>
                <div className={st.user_img}>
                    <img src={user.picture} alt={user.nickname} />
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
