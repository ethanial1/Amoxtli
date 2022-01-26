import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from '../views/Private/Private';
import Landing from '../views/Landing/Landing';
import PrivateRoute from './PrivateRoute';

const Rutas = () => {
  return (
    <Switch>
      <Route exact path='/' children={<Landing />}/>
      <PrivateRoute path='/amoxtli' component={Private}/>
      <Route path='*' children={<div>hola hola</div>}/>
    </Switch>
  )
};

export default Rutas;


