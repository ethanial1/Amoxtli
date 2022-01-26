import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, ...res}) => {
    const { isAuthenticated } = useAuth0();

    return (
        <Route {...res} >
            { !isAuthenticated ? <Component /> : <Redirect to='/amoxtli'/>}
        </Route>
    )
};

export default PublicRoute;
