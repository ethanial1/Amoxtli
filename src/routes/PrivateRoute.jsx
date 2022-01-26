import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...res}) => {
    const { isAuthenticated } = useAuth0();

    return (
        <Route {...res} >
            {isAuthenticated ? <Component /> : <Redirect to='/'/>}
        </Route>
    )
};

export default PrivateRoute;
