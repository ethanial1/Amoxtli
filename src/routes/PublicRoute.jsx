import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, ...res}) => {
    const auth = true;
    return (
        <Route {...res} >
            {!auth ? <Component /> : <Redirect to='/amoxtli'/>}
        </Route>
    )
};

export default PublicRoute;
