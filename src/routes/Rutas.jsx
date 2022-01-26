import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from '../views/Private';
import Landing from '../views/Landing/Landing';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Rutas = () => {
  return (
    <Switch>
      <PublicRoute exact path='/' component={Landing} />
      <PrivateRoute path='/amoxtli' component={Private}/>
      <Route path='*' children={<div>hola hola</div>}/>
    </Switch>
  )
};

export default Rutas;


