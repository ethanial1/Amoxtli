import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import Perfil from '../../components/user/Perfil';

const UserPerfil = () => {
    const { url, path } = useRouteMatch();

    return (
        <div className='wrapper'>
            <h3>Settings</h3>
            <div>
                <ul>
                    <li><NavLink to={url}>Perfil</NavLink></li>
                    <li><NavLink to={`${url}/saved`}>Books Saved</NavLink></li>
                </ul>
            </div>
            <Switch>
                <Route exact path={path} component={Perfil}/>
            </Switch>
        </div>
    )
};

export default UserPerfil;
