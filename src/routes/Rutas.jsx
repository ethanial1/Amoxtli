import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Private from '../views/Private/Private';
import Landing from '../views/Landing/Landing';
import PrivateRoute from './PrivateRoute';

const Rutas = () => {
  return (
    <Switch>
      <Route exact path='/' children={<Landing />}/>
      <PrivateRoute exact path='/amoxtli' component={Private}/>
      <Route path='*' children={<div>hola hola</div>}/>
    </Switch>
  )
};

export default Rutas;


