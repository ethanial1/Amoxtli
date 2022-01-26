import React from 'react';
import logo from '../../assets/Logo1.png'
import st from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={st.nav_bar}>
            <div>
                <img src={logo} alt="amoxtli"/>
            </div>
            <div className={st.search_form}>
                <div class={st.input_group}>
                    <button>
                        <i class='bx bx-search-alt' ></i>
                    </button>
                    <input type="text" placeholder="Search" />
                </div>
                <div className={st.user_img}>
                    <img src="https://uh.gsstatic.es/sfAttachPlugin/970899.jpg" alt="" srcset="" />
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
