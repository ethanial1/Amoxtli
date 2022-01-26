import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...res}) => {
    //TODO hacer la verificación con auth0 para renderizar o no el componente
    const auth = true;

    return (
        <Route {...res} >
            {auth ? <Component /> : <Redirect to='/'/>}
        </Route>
    )
};

export default PrivateRoute;
