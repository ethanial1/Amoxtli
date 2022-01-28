import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import BookSaved from '../../components/Books/BookSaved';
import Perfil from '../../components/user/Perfil';

import st from './User.module.css';

const UserPerfil = () => {
    const { url, path } = useRouteMatch();

    return (
        <div className='wrapper'>
            <div className={st.nav}>
                <h3>Settings</h3>
                <div>
                    <ul>
                        <li><NavLink exact to={url} activeClassName={st.user_nav}>Perfil</NavLink></li>
                        <li><NavLink exact to={`${url}/saved`} activeClassName={st.user_nav}>Books Saved</NavLink></li>
                    </ul>
                </div>
            </div>
            <Switch>
                <Route exact path={path} component={Perfil}/>
                <Route exact path={`${path}/saved`} component={BookSaved}/>
            </Switch>
        </div>
    )
};

export default UserPerfil;
